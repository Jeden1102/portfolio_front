<template>
  <div class="relative flex bg-secondary py-4 text-white">
    <div
      class="container-custom flex flex-col items-center justify-center gap-10 md:flex-row"
      data-aos="fade-up"
    >
      <div
        class="flex flex-col items-center gap-2 md:items-start"
        data-aos="fade-up"
      >
        <h1
          data-aos="fade-up"
          class="text-3xl font-bold md:text-4xl lg:text-7xl"
        >
          Hello! <span class="font-light">I'm Dominik</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          class="mb-4 text-sm font-light md:text-lg"
        >
          FrontEnd Developer
        </p>
        <p data-aos="fade-up" data-aos-delay="150">Main skills</p>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          class="md:text-md text-sm font-light"
        >
          Nuxt/Vue/React/TS/PHP/Drupal
        </p>
        <NuxtLink
          data-aos="fade-up"
          data-aos-delay="200"
          to="/about"
          class="mt-4 flex items-center gap-1 text-primary"
          >More about me <Icon name="solar:alt-arrow-right-outline"
        /></NuxtLink>
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <client-only>
          <Vue3Lottie
            animationLink="animation.json"
            :height="300"
            :width="300"
          />
        </client-only>
        <div class="mt-4 flex w-full gap-4 lg:mt-10">
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

<script setup lang="ts">
  import { Vue3Lottie } from 'vue3-lottie'
</script>
