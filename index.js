const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");
const mysql = require("mysql2");
require('dotenv').config();
const bodyParser = require("body-parser");

const TOKEN = "7179921695:AAFfUHDE7XYnk0pvHuipXV2icp2PhKcD3NA";
const bot = new TelegramBot(TOKEN, { polling: true });
const port = 3333;
const gameName = "moonton_game";
const queries = {};

const app = express();
app.use(express.static(path.join(__dirname, 'MoontonFixed')));
app.use(bodyParser.json());


let server;

const isProduction = process.env.NODE_ENV === 'production';
if (isProduction) {
    const privateKey = fs.readFileSync('ssl/private.key', 'utf8');
    const certificate = fs.readFileSync('ssl/certificate.crt', 'utf8');
    const httpsOptions = {
        key: privateKey,
        cert: certificate
    };
    server = https.createServer(httpsOptions, app);
} else {
    server = app;
}

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


let currentUserId = null;  // For simplicity, using a global variable

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
        let gameurl = "";
        bot.answerCallbackQuery(query.id, {
            url: gameurl
        });

        // Register user when they start the game
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
    const data = { id: userId, username: username };
    const query = 'INSERT INTO players (id, username, money, level, currentXP) VALUES (?, ?, 0, 1, 0) ON DUPLICATE KEY UPDATE username = ?';

    db.query(query, [userId, username, username], (err, result) => {
        if (err) throw err;
        console.log('User registered successfully');
        currentUserId = userId;
    });
}

// API endpoints
server.post("/register", (req, res) => {
    const { id, username } = req.body;
    registerUser(id, username);
    res.json({ message: 'User registered successfully' });
});

server.get("/get_user/:id", (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM players WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.json({
                id: result[0].id,
                username: result[0].username,
                money: result[0].money,
                level: result[0].level,
                currentXP: result[0].currentXP
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });
});

server.post("/set_user_id_in_unity", (req, res) => {
    const { id } = req.body;
    currentUserId = id;
    res.json({ message: 'User ID set in Unity' });
});

server.get("/get_current_user_id", (req, res) => {
    if (currentUserId !== null) {
        res.json({ id: currentUserId });
    } else {
        res.status(404).json({ message: 'No user ID found' });
    }
});

server.post("/update_user_data", (req, res) => {
    const { id, money, level, currentXP } = req.body;
    const query = 'UPDATE players SET money = ?, level = ?, currentXP = ? WHERE id = ?';

    db.query(query, [money, level, currentXP, id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'User data updated successfully' });
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server running on port ${ port }`);
});