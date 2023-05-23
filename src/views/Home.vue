<template>
  <div class="home">
    <h3>{{ counter.title }}</h3>
    <div>
      <button class="btn" @click="counter.decrement(2)">-2</button>
      <button class="btn" @click="counter.decrement(1)">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn" @click="counter.increment(1)">+</button>
      <button class="btn" @click="counter.increment(2)">+2</button>
    </div>
    <div class="edit">
      <h4>{{ counter.oddOrEven }}</h4>
      <input v-model="counter.title" type="text" v-autofocus />
    </div>
    <p>The number on the counter is</p>
  </div>
</template>

<!-- Composition API v2 -->

<script setup>
import { vAutofocus } from '@/directives/vAutofocus'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 20px;
}
</style>
