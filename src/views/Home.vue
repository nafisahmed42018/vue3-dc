<template>
  <div class="home">
    <div>
      <button class="btn" @click="decrement">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increment">+</button>
    </div>
  </div>
</template>

<!-- Options API -->
<!-- <script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
}
</script> -->
<script setup>
import { ref } from 'vue'

const counter = ref(0)

const increment = () => counter.value++
const decrement = () => counter.value--
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
</style>
