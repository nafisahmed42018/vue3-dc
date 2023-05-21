<template>
  <div class="home">
    <h3>{{ counterData.title }} :</h3>
    <div>
      <button class="btn" @click="decrement">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increment">+</button>
    </div>
    <div class="edit">
      <h4>{{ inp }}</h4>
      <input v-model="counterData.title" type="text" />
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

<!-- Composition API v1 -->

<!-- <script>
  export default{
    write everything in setup function
    setup() {
      const counter = Vue.ref(0)
      const increment = () => counter.value++
      const decrement = () => counter.value--
      return {
        counter,
        increment,
        decrement
      }
    }
  }
</script> -->

<!-- Composition API v2 -->

<script setup>
import { ref, reactive } from 'vue'

// reference
const counter = ref(0)
const counterTitle = ref('Counter')
// non-reactive data
const inputLabel = 'Edit counter title :'

// a data type which has a proxy object to track changes of the data
const counterData = reactive({
  count: 0,
  title: 'Counter'
})
console.log(counterData)
const increment = () => counterData.count++
const decrement = () => counterData.count--
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
