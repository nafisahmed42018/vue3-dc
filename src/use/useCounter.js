import { reactive, computed, watch, nextTick } from 'vue'
// To make a reactive data available to other components, having the same data, we need to make
// it global by exoporting the data outside of the composible function. Or the component will use its
// own seperate instance of the data.
export const useCounter = () => {
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
  return {
    inputLabel,
    counterData,
    oddOrEven,
    increment,
    decrement
  }
}
