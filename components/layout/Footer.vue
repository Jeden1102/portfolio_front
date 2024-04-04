<template>
  <footer
    class="hidden bg-gray-900 py-4 text-sm font-light text-gray-400 lg:block"
  >
    <div class="container-custom flex gap-4">
      <NuxtLink to="/">
        <span>Home</span>
      </NuxtLink>
      <NuxtLink to="/about">
        <span>About me</span>
      </NuxtLink>
      <NuxtLink to="/skills">
        <span>Skills&Projects</span>
      </NuxtLink>
      <NuxtLink to="/contact">
        <span>Contact</span>
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
