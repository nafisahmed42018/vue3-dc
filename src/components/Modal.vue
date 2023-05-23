<template>
  <Teleport to=".modal-container">
    <div class="modal">
      <h2>{{ title }}</h2>
      <slot />
      <!-- Doesnt work -->
      <!-- <pre>{{ $slots.title() }}</pre> -->
      <!-- direct way -->
      <!-- <button @click="$emit('hideModal')">Hide Modal</button> -->
      <button @click="handleVisibilty">Hide Modal</button>
    </div>
  </Teleport>
</template>

<script setup>
// import { useSlots } from 'vue'
// const slots = useSlots()

// console.log(slots.title())
const props = defineProps({
  title: {
    type: String,
    default: 'Default Title'
  }
})

const emit = defineEmits(['hideModal'])

const handleVisibilty = () => {
  emit('hideModal')
}
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  background-color: bisque;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 50%;
  transform: translate(-50%, -50%);
}
</style>
