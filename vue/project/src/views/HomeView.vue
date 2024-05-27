<template>
  <main>

    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['item', { active: activeTab === index }]"
        @click="setActiveTab(index)"
        :role="tab"
        >
      {{ tab }}
      </div>
    </div>

    <div class="tab" v-if="activeTab === 0">

      <div class="progress">

        <div class="score">
          <div class="coinImg">
            <img src="/moons_coin_1.svg">
          </div>
          <div class="num">{{ num }}</div>
        </div>

        <div class="bar">
          <div class="info">
            <div>Level <span>{{ level }}</span></div>
            <div>Moons <span>{{ moons }}/{{ level_ceil }}</span></div>
          </div>
          <div class="content">
            <div :style="{ width: progress + '%' }"></div>
          </div>
        </div>

      </div>

      <div class="tap">
        <img 
        src="/tap.png" 
        @touchstart="ontap" 
        @touchend="tap"
        @mousedown="ontap" 
        @mouseup="tap"
        >
      </div>

    </div>

    <div class="tab" v-if="activeTab === 1">

    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue'

// Tabs

const tabs = ref(['Game', 'Exchange'])
const activeTab = ref(0)

const setActiveTab = (index) => {
  activeTab.value = index
}

// Progress

const num = ref(0);

const level = ref(1);

const moons = ref(0);

const level_ceil = ref(level.value * 40);

const progress = ref(1);

function ontap(event) {
  event.currentTarget.classList.add('scaled');
}

function tap(event) {
  event.currentTarget.classList.remove('scaled');
  num.value = Number(num.value) + 1;
  moons.value = num.value;
  progress.value = Number(moons.value / level_ceil.value) * 100;
}


</script>



<style scoped lang="scss">

main {

  .tabs {
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 3px;
    border-radius: 10px;
    background: #2d2d2d7c;
    height: 55px;
    position: relative;

    .item {
      width: 50%;
      height: 100%;
      border-radius: 10px;
      font-size: 20px;
      color: #8B8B8B;
      align-items: center;
      justify-content: center;
      display: flex;
      cursor: pointer;

      &.active {
        color: #EFEFEF;
        background: #668CAF;
      }
    }
  }

  .tab {


    .progress {
      .score {
        display: flex;
        justify-content: center;
        align-items: center;

        .coinImg {
          img {
            width: 95px;
            height: 95px;
            object-fit: contain;
          }
        }

        .num {
          font-size: 40px;
          font-weight: bold;
          color: white;
        }


      }
    }

    .bar {
      margin-top: 10px;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        div {
          font-size: 13px;
          color: #8D8D8D;

          span {
            color: #EFEFEF;
          }
        }
      }

      .content {
        background: #2D2D2D;
        width: 100%;
        position: relative;
        height: 13px;
        border-radius: 6.5px;
        overflow: hidden;

        div {
          content: "";
          background: #E9E9E9;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 6.5px;
          transition: width 0.5s;
        }
      }

    }

    .tap {
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      margin-top: 50px;
      

      img {
        aspect-ratio: 1/1;
        width: 30vh;
        cursor: pointer;
        height: auto;
        transition: transform 0.05s;

        &.scaled {
          transform: scale(1.05);
        }
      }
    }
  }
}

</style>
