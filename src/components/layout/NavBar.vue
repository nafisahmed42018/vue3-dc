<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-dasktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          <RouterLink to="/" style="text-decoration: none; color: inherit;">
            Noteballs
          </RouterLink>
        </div>
        <a
          @click.prevent="showMobileMenu = !showMobileMenu"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileMenu }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileMenu }"
      >
        <div class="navbar-end">
          <RouterLink class="navbar-item" to="/" active-class="is-active">
            Notes
          </RouterLink>
          <RouterLink class="navbar-item" to="/stats" active-class="is-active">
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const showMobileMenu = ref(false)
</script>

<style scoped>
.navbar-menu {
  @media screen and (max-width: 1023px) {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
