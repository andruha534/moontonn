<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <RouterView />

  <nav>
    <RouterLink to="/coin">Coin</RouterLink>
    <RouterLink to="/friends">Friends</RouterLink>
    <RouterLink to="/">Main</RouterLink>
    <RouterLink to="/upgrade">Upgrade</RouterLink>
    <RouterLink to="/tasks">Tasks</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
  nav {
    width: 100%;
    height: 73px;
    background: #161616; 
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 25px 25px 0px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  } 
</style>
