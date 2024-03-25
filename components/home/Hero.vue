<template>
  <div class="relative flex bg-secondary py-4 text-white">
    <div
      class="container-custom flex flex-col items-center justify-center gap-10 md:flex-row"
    >
      <div class="flex flex-col items-center gap-2 md:items-start">
        <h1 class="text-2xl font-bold md:text-4xl lg:text-7xl">
          Hello! I'm Dominik
        </h1>
        <p class="mb-4 text-sm font-light md:text-lg">FrontEnd Developer</p>
        <p>Main skills</p>
        <p class="md:text-md text-sm font-light">
          Nuxt/Vue/React/TS/PHP/Drupal
        </p>
        <NuxtLink to="/about" class="mt-4 flex items-center gap-1 text-primary"
          >More about me <Icon name="solar:alt-arrow-right-outline"
        /></NuxtLink>
      </div>
      <div>
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
    </div>
  </div>
</template>

<script setup lang="ts"></script>
