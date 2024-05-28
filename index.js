const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
const bot = new TelegramBot(TOKEN, { polling: true });
const port = process.env.PORT || 3000;
const gameName = "moonton_game";
const queries = {};

const app = express();
app.use(express.static(path.join(__dirname, 'MoontonFixed')));
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: "viaduct.proxy.rlwy.net",
    user: "root",
    password: "QOrZKuMZbuQhfYYVjslMedJcwckgtnjP",
    database: "railway",
    port: 44856
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL connected...");
});

// Telegram bot handlers
bot.onText(/help/, (msg) => bot.sendMessage(msg.chat.id, "Say /game if you want to play."));
bot.onText(/start|game/, (msg) => {
    registerUser(msg.chat.id, msg.chat.username);
    bot.sendGame(msg.chat.id, gameName);
});

// Handle "Play" button click
bot.on("message", (msg) => {
    if (msg.text === "Play") {
        registerUser(msg.chat.id, msg.chat.username);
    }
});

bot.on("callback_query", function (query) {
    if (query.game_short_name !== gameName) {
        bot.answerCallbackQuery(query.id, {
            text: "Sorry, '" + query.game_short_name + "' is not available.",
            show_alert: true
        });
    } else {
        queries[query.id] = query;
        let gameurl = `https://moontonn-production.up.railway.app/?id=${query.from.id}`;
        bot.answerCallbackQuery(query.id, { url: gameurl });
        registerUser(query.from.id, query.from.username);
    }
});

bot.on("inline_query", function (iq) {
    bot.answerInlineQuery(iq.id, [{
        type: "game",
        id: "0",
        game_short_name: gameName
    }]);
});

// Function to register user
function registerUser(userId, username) {
    const query = 'INSERT INTO players (id, username, money, level, currentXP) VALUES (?, ?, 0, 1, 0) ON DUPLICATE KEY UPDATE username = ?';
    db.query(query, [userId, username, username], (err, result) => {
        if (err) throw err;
        console.log('User registered successfully');
    });
}

// API endpoints
app.post("/register", (req, res) => {
    const { id, username } = req.body;
    registerUser(id, username);
    res.json({ message: 'User registered successfully' });
});

app.get("/get_user/:id", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const id = req.params.id;
    db.query('SELECT * FROM players WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.json(result[0]);
        } else {
            res.json({ message: 'User not found' });
        }
    });
});

app.post("/update_user_data", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const { id, money, level, currentXP } = req.body;
    const query = 'UPDATE players SET money = ?, level = ?, currentXP = ? WHERE id = ?';
    db.query(query, [money, level, currentXP, id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'User data updated successfully' });
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.use(express.static(path.join(__dirname, 'dist')));

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});