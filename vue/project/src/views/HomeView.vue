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
          <div class="num">0</div>
        </div>
      </div>

    </div>

    <div class="tab" v-if="activeTab === 1">

    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ref(['Game', 'Exchange'])
const activeTab = ref(0)

const setActiveTab = (index) => {
  activeTab.value = index
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
  }
}

</style>
