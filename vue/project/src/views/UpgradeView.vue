<template>
  <div :class="$style.upgrade">
    <img :class="$style.upgradeChild" alt="" src="/rectangle-1@2x.png" />
    <div :class="$style.moonTonParent">
      <div :class="$style.moonTon">MOON TON</div>
      <div :class="$style.game">game</div>
    </div>
    <div :class="$style.vectorParent">
      <img :class="$style.groupChild" alt="" src="/vector-1.svg" />
      <div :class="$style.back">Back</div>
    </div>
    <img :class="$style.upgradeItem" alt="" src="/group-3.svg" />
    <b :class="$style.b">150</b>
    <img :class="$style.rocketIcon" alt="" src="/rocket@2x.png" />
    <div :class="$style.dynamicIslandParent">
      <div :class="$style.dynamicIsland">
        <div :class="$style.dynamicIsland1" />
      </div>
      <div :class="$style.topRight">
        <div :class="$style.battery">
          <div :class="$style.box" />
          <div :class="$style.box1" />
          <img :class="$style.boxIcon" alt="" src="/box.svg" />
        </div>
        <img :class="$style.wifiIcon" alt="" src="/wifi@2x.png" />
        <div :class="$style.cellularConnection">
          <div :class="$style.box2" />
          <div :class="$style.box3" />
          <div :class="$style.box4" />
          <div :class="$style.box5" />
        </div>
      </div>
      <img :class="$style.timeIcon" alt="" src="/time.svg" />
      <div :class="$style.bar" />
    </div>
    <img :class="$style.menuDownIcon" alt="" src="/menu-down.svg" />
    <img :class="$style.rocketIcon1" alt="" src="/rocket@2x.png" />
    <div :class="$style.yourBalance">Your balance</div>
    <b :class="$style.freeDailyUpgrades">Free daily upgrades</b>
    <b :class="$style.paidUpgrades">Paid upgrades</b>
    <img :class="$style.coin0Icon" alt="" src="/coin0.svg" />
    <img :class="$style.moonsCoin1Icon" alt="" src="/moons-coin1.svg" />
    <img :class="$style.moonsCoin2Icon" alt="" src="/moons-coin2.svg" />
    <div :class="$style.upgradeInner" />
    <div :class="$style.rectangleDiv" />
    <div :class="$style.upgradeChild1" />
    <div :class="$style.upgradeChild2" />
    <div :class="$style.upgradeChild3" />
    <b :class="$style.doubleClick">Double-click</b>
    <b :class="$style.autoClick">Auto-click</b>
    <img :class="$style.oldVarIcon" alt="" src="/old-var.svg" />
    <div :class="$style.rectangleParent" @click="onGroupContainer3Click">
      <div :class="$style.groupItem" />
      <b :class="$style.moreMoney">More money</b>
      <img :class="$style.moneyBlueIcon" alt="" src="/money-blue.svg" />
    </div>
    <img :class="$style.handBlueIcon" alt="" src="/hand-blue@2x.png" />
    <img :class="$style.crownBlueIcon" alt="" src="/crown-blue.svg" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UPGRADE",
    methods: {
      onGroupContainer3Click() {
        // Please sync "UPGRADE_BUY" to the project
      },
    },
  });
</script>
<style module>
  .upgradeChild {
    position: absolute;
    top: 73px;
    left: 0px;
    border-radius: var(--br-11xl) var(--br-11xl) 0px 0px;
    width: 430px;
    height: 859px;
    object-fit: cover;
  }
  .moonTon {
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .game {
    position: absolute;
    top: 18px;
    left: 23px;
    font-size: var(--font-size-smi);
    color: #6e6e6e;
  }
  .moonTonParent {
    position: absolute;
    top: 86px;
    left: 172px;
    width: 86px;
    height: 34px;
    font-size: var(--font-size-mini);
  }
  .groupChild {
    position: absolute;
    top: 3px;
    left: 0px;
    width: 6px;
    height: 12px;
  }
  .back {
    position: absolute;
    top: 0px;
    left: 17px;
  }
  .vectorParent {
    position: absolute;
    top: 92px;
    left: 16px;
    width: 54px;
    height: 18px;
    font-size: var(--font-size-mini);
  }
  .upgradeItem {
    position: absolute;
    top: 92px;
    left: 396px;
    width: 18px;
    height: 18px;
  }
  .b {
    position: absolute;
    top: 191.5px;
    left: 215px;
    font-size: 40px;
  }
  .rocketIcon {
    position: absolute;
    top: 859px;
    left: 193px;
    width: 44.1px;
    height: 44.1px;
    overflow: hidden;
    object-fit: contain;
    display: none;
  }
  .dynamicIsland1 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-81xl);
    background-color: #000;
    width: 137.6px;
    height: 40.1px;
  }
  .dynamicIsland {
    position: absolute;
    top: 0px;
    left: 91.8px;
    width: 137.6px;
    height: 40.1px;
  }
  .box {
    position: absolute;
    height: 100%;
    width: 89.26%;
    top: 0%;
    right: 10.74%;
    bottom: 0%;
    left: 0%;
    border-radius: 8px;
    border: 1px solid var(--color-white);
    box-sizing: border-box;
    opacity: 0.35;
    mix-blend-mode: normal;
  }
  .box1 {
    position: absolute;
    height: 71.14%;
    width: 75.17%;
    top: 14.09%;
    right: 17.79%;
    bottom: 14.77%;
    left: 7.05%;
    border-radius: 6px;
    background-color: var(--color-white);
  }
  .boxIcon {
    position: absolute;
    height: 28.86%;
    width: 7.05%;
    top: 35.57%;
    right: 0%;
    bottom: 35.57%;
    left: 92.95%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    opacity: 0.35;
    mix-blend-mode: normal;
  }
  .battery {
    position: absolute;
    height: 100%;
    width: 34.41%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 65.59%;
  }
  .wifiIcon {
    position: absolute;
    height: 100%;
    width: 24.36%;
    top: 0%;
    right: 41.8%;
    bottom: 0%;
    left: 33.83%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .box2 {
    position: absolute;
    height: 38.76%;
    width: 18.26%;
    top: 61.24%;
    right: 81.74%;
    bottom: 0%;
    left: 0%;
    border-radius: var(--br-11xs);
    background-color: var(--color-white);
  }
  .box3 {
    position: absolute;
    height: 54.26%;
    width: 18.26%;
    top: 46.51%;
    right: 54.34%;
    bottom: -0.78%;
    left: 27.4%;
    border-radius: var(--br-11xs);
    background-color: var(--color-white);
  }
  .box4 {
    position: absolute;
    height: 76.74%;
    width: 18.26%;
    top: 23.26%;
    right: 26.94%;
    bottom: 0%;
    left: 54.79%;
    border-radius: var(--br-11xs);
    background-color: var(--color-white);
  }
  .box5 {
    position: absolute;
    height: 100%;
    width: 18.26%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 81.74%;
    border-radius: var(--br-11xs);
    background-color: var(--color-white);
  }
  .cellularConnection {
    position: absolute;
    height: 86.58%;
    width: 25.29%;
    top: 6.71%;
    right: 74.71%;
    bottom: 6.71%;
    left: 0%;
  }
  .topRight {
    position: absolute;
    height: 1.63%;
    width: 25.47%;
    top: 1.38%;
    right: 0%;
    bottom: 96.98%;
    left: 74.53%;
  }
  .timeIcon {
    position: absolute;
    top: calc(50% - 443.65px);
    left: 0px;
    width: 39.4px;
    height: 15.2px;
  }
  .bar {
    position: absolute;
    top: 906.5px;
    left: calc(50% - 77px);
    border-radius: var(--br-81xl);
    background-color: var(--color-white);
    width: 153.6px;
    height: 5.1px;
  }
  .dynamicIslandParent {
    position: absolute;
    top: 11.5px;
    left: 45px;
    width: 340px;
    height: 911.5px;
  }
  .menuDownIcon {
    position: absolute;
    top: 843.6px;
    left: 0px;
    width: 430px;
    height: 88.4px;
  }
  .rocketIcon1 {
    position: absolute;
    top: 243px;
    left: 79px;
    width: 64px;
    height: 37px;
    overflow: hidden;
    object-fit: contain;
    display: none;
  }
  .yourBalance {
    position: absolute;
    top: 155px;
    left: calc(50% - 43px);
    font-size: var(--font-size-smi);
  }
  .freeDailyUpgrades {
    position: absolute;
    top: 305px;
    left: calc(50% - 182px);
    font-size: var(--font-size-base);
  }
  .paidUpgrades {
    position: absolute;
    top: 496px;
    left: calc(50% - 182px);
    font-size: var(--font-size-base);
  }
  .coin0Icon {
    position: absolute;
    height: 9.89%;
    width: 21.44%;
    top: 23.61%;
    right: 48.79%;
    bottom: 66.5%;
    left: 29.77%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    display: none;
  }
  .moonsCoin1Icon {
    position: absolute;
    height: 9.92%;
    width: 21.51%;
    top: 18.45%;
    right: 48.84%;
    bottom: 71.62%;
    left: 29.65%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .moonsCoin2Icon {
    position: absolute;
    height: 10.09%;
    width: 21.86%;
    top: 18.35%;
    right: 48.6%;
    bottom: 71.57%;
    left: 29.53%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .upgradeInner {
    position: absolute;
    top: 533px;
    left: 33px;
    border-radius: var(--br-3xs);
    background-color: var(--color-gray-100);
    width: 114px;
    height: 114px;
  }
  .rectangleDiv {
    position: absolute;
    top: 342px;
    left: 158px;
    border-radius: var(--br-3xs);
    background-color: var(--color-gray-100);
    width: 113px;
    height: 114px;
  }
  .upgradeChild1 {
    position: absolute;
    top: 533px;
    left: 158px;
    border-radius: var(--br-3xs);
    background-color: var(--color-gray-100);
    width: 113px;
    height: 114px;
  }
  .upgradeChild2 {
    position: absolute;
    top: 342px;
    left: 283px;
    border-radius: var(--br-3xs);
    background-color: var(--color-gray-100);
    width: 114px;
    height: 114px;
  }
  .upgradeChild3 {
    position: absolute;
    top: 533px;
    left: 283px;
    border-radius: var(--br-3xs);
    background-color: var(--color-gray-100);
    width: 114px;
    height: 114px;
  }
  .doubleClick {
    position: absolute;
    top: 421px;
    left: 171px;
  }
  .autoClick {
    position: absolute;
    top: 421px;
    left: 305px;
  }
  .oldVarIcon {
    position: absolute;
    height: 5.83%;
    width: 72.56%;
    top: 38.56%;
    right: 15.12%;
    bottom: 55.61%;
    left: 12.33%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    display: none;
  }
  .groupItem {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-3xs);
    background-color: var(--color-gray-100);
    width: 114px;
    height: 114px;
  }
  .moreMoney {
    position: absolute;
    top: 79px;
    left: 14px;
  }
  .moneyBlueIcon {
    position: absolute;
    height: 25.44%;
    width: 64.91%;
    top: 30.7%;
    right: 17.54%;
    bottom: 43.86%;
    left: 17.54%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .rectangleParent {
    position: absolute;
    top: 342px;
    left: 33px;
    width: 114px;
    height: 114px;
    cursor: pointer;
  }
  .handBlueIcon {
    position: absolute;
    height: 5.45%;
    width: 14.05%;
    top: 38.95%;
    right: 42.93%;
    bottom: 55.6%;
    left: 43.02%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .crownBlueIcon {
    position: absolute;
    height: 5.17%;
    width: 11.26%;
    top: 38.63%;
    right: 15.02%;
    bottom: 56.2%;
    left: 73.72%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .upgrade {
    width: 100%;
    position: relative;
    background-color: #171717;
    height: 932px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--color-whitesmoke);
    font-family: var(--font-century-gothic);
  }
</style>
