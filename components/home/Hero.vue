<template>
  <div
    class="relative mx-auto flex flex-col items-center justify-center gap-2 bg-secondary px-8 py-4 text-white lg:gap-4"
  >
    <h1 class="text-2xl font-bold lg:text-7xl">Hello! I'm Dominik</h1>
    <p class="mb-4 text-sm font-light">FrontEnd Developer</p>
    <p>Main skills</p>
    <p class="text-sm font-light">Nuxt/Vue/React/TS/PHP/Drupal</p>
    <img width="400" height="400" src="@/assets/images/hero.gif" alt="" />
    <div class="flex w-full gap-4">
      <NuxtLink
        class="atoms-button flex w-full justify-center text-center"
        to="/skills"
      >
        Skills
      </NuxtLink>
      <NuxtLink
        class="atoms-button light flex w-full justify-center text-center"
        to="/skills"
      >
        Contact
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
