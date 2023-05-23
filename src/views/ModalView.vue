<template>
  <div class="container">
    <h1>Modal</h1>
    <button @click="toggleModal">Show Modal</button>
  </div>

  <Teleport to=".modal-container">
    <div class="modal" v-if="showModal">
      <h2>This is a modal</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa dolor tenetur reiciendis
        placeat dolorem dicta, distinctio ducimus, ea, sequi dolorum nihil. Fugiat quo provident
        ipsam!
      </p>
      <button @click="toggleModal">Hide Modal</button>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const toggleModal = () => {
  showModal.value = !showModal.value
}
</script>

<style scoped>
.container {
  padding: 1rem;
}
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
