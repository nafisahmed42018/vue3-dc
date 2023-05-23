<template>
  <div class="posts">
    <h1>Posts</h1>
    <input type="text" v-autofocus />

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/posts/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus'
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: 'Post 1'
  },
  {
    id: 10,
    title: 'Post 10'
  },
  {
    id: 100,
    title: 'Post 100'
  }
])
</script>

<style lang="scss" scoped></style>
