<template>
  <div class="post-detail">
    <h1>Post Detail</h1>
    <p>This is the content of post with the id of {{ $route.params.id }}</p>
    <button @click="showPostID">Show ID</button>
    <button @click="goBack">Go Back</button>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showPostID = () => {
  alert(`Post no. ${route.params.id}`)
}
const goBack = () => {
  setTimeout(() => {
    router.push('/')
  }, 1000)
}
</script>

<style scoped>
.post-detail p {
  margin: 30px 0;
}
</style>
