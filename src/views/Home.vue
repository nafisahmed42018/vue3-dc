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
import { ref, reactive, computed, watch, nextTick } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'

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
const decrement = async (amount) => {
  counterData.count -= amount
  await nextTick()
  console.log('first')
}
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
