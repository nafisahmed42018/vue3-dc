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
      <input v-model="counterData.title" type="text" />
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
import { ref, reactive, computed, watch } from 'vue'

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
const oddOrEven = computed(() => {
  if (counterData.count === 0) {
    return 'unchanged'
  } else if (counterData.count % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
})

watch(
  () => counterData.count,
  (newValue, oldValue) => {
    if (newValue > 20) {
      alert('Counter is greater than 20')
    }
  }
)
// console.log(oddOrEven)

const increment = (amount, e) => {
  console.log(e)
  counterData.count += amount
}
const decrement = (amount) => (counterData.count -= amount)
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
