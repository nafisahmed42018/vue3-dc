<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<style>
@import url('node_modules\bulma\css\bulma.min.css');
</style>
