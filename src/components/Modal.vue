<template>
  <Teleport to="body">
    <div class="modal" v-if="modelValue">
      <h2>{{ title }}</h2>
      <slot />
      <p>{{ userData.username }}</p>
      <button @click="handleVisibilty">Hide Modal</button>
    </div>
  </Teleport>
</template>

<script setup>
import { inject } from 'vue'
const userData = inject('userData')
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Default Title'
  }
})

const emit = defineEmits(['update:modelValue'])

const handleVisibilty = () => {
  emit('update:modelValue', false)
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
  animation: slideUp 0.5s ease-in-out;
}
.modal-exit {
  animation: slideUp 0.5s ease-in-out reverse;
}

@keyframes slideUp {
  0% {
    transform: translate(-50%, 100%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}
</style>
