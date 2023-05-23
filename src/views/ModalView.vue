<template>
  <div class="container">
    <h1>Modal</h1>
    <button @click="toggleModal">Show Modal</button>
    <Modal v-if="showModal" :title="'Handed Down Title'" @hideModal="toggleModal">
      <!-- <template #title>New Modal Title</template> -->
      <!-- <template v-slot:title>New Modal Title</template> -->
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa dolor tenetur reiciendis
        placeat dolorem dicta, distinctio ducimus, ea, sequi dolorum nihil. Fugiat quo provident
        ipsam!
      </p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

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
