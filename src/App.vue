<template>
  <RouterLink to="/">Notes</RouterLink>
  |
  <RouterLink to="/stats">Stats</RouterLink>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
