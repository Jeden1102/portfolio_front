<template>
  <div class="container-custom flex flex-col gap-8 py-4">
    <div class="flex gap-2">
      <NuxtLink to="/skills/list"
        ><AtomsBadge variant="big">Display in list</AtomsBadge></NuxtLink
      >
      <NuxtLink to="/skills/fancy"
        ><AtomsBadge variant="big">Display in fancy style</AtomsBadge></NuxtLink
      >
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
