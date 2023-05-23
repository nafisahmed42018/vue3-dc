import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'Counter Title'
  }),
  actions: {
    increment(amount) {
      this.count += amount
    },
    decrement(amount) {
      this.count -= amount
    }
  },
  getters: {
    oddOrEven() {
      if (this.count === 0) {
        return 'unchanged'
      } else if (this.count % 2 === 0) {
        return 'even'
      } else {
        return 'odd'
      }
    }
  }
})
