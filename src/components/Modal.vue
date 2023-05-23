<template>
  <Teleport to=".modal-container">
    <div class="modal">
      <h2><slot name="title" /></h2>
      <slot />
      <!-- Doesnt work -->
      <!-- <pre>{{ $slots.title() }}</pre> -->
      <button>Hide Modal</button>
    </div>
  </Teleport>
</template>

<script setup>
// import { useSlots } from 'vue'
// const slots = useSlots()

// console.log(slots.title())
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
