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

<style scoped>

</style>
