<template>
  <div class="container">
    <h1>Modal</h1>
    <div>
      <label for="darkMode">Show Dark Modal?</label>
      <input type="checkbox" id="darkMode" v-model="darkMode" />
    </div>
    <button @click="toggleModal">Show Modal</button>
    <pre>{{ darkMode }}</pre>
    <component :is="darkMode ? ModalDark : Modal" v-model="showModal" :title="'Handed Down Title'">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa dolor tenetur reiciendis
        placeat dolorem dicta, distinctio ducimus, ea, sequi dolorum nihil. Fugiat quo provident
        ipsam!
      </p>
    </component>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'

const darkMode = ref(false)
const showModal = ref(false)
const toggleModal = () => {
  showModal.value = !showModal.value
}
</script>

<style scoped>
.container {
  padding: 1rem;
}
</style>
