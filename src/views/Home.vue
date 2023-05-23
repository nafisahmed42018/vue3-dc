<template>
  <div class="home">
    <h3>{{ counterData.title }} :</h3>
    <div>
      <button class="btn" @click="decrement(2)">-2</button>
      <button class="btn" @click="decrement(1)">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increment(1)">+</button>
      <button class="btn" @click="increment(2, $event)">+2</button>
    </div>
    <div class="edit">
      <h4>{{ inputLabel }}</h4>
      <input v-model="counterData.title" type="text" v-autofocus />
    </div>
    <p>The number on the counter is {{ oddOrEven }}</p>
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
  directives: {
    autofocus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script> -->

<!-- Composition API v2 -->

<script setup>
import { vAutofocus } from '@/directives/vAutofocus'
import { useCounter } from '../use/useCounter'

const { inputLabel, counterData, oddOrEven, increment, decrement } = useCounter()
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
