<template>
  <div class="relative flex bg-secondary py-4 text-white">
    <div
      class="container-custom mobile-screen flex flex-col items-center justify-center gap-10 md:flex-row lg:gap-52"
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
        <div class="flex flex-wrap gap-2">
          <AtomsBadge>Nuxt</AtomsBadge>
          <AtomsBadge>Vue</AtomsBadge>
          <AtomsBadge>React</AtomsBadge>
          <AtomsBadge>TS</AtomsBadge>
          <AtomsBadge>PHP</AtomsBadge>
          <AtomsBadge>Drupal</AtomsBadge>
        </div>
        <NuxtLink
          data-aos="fade-up"
          data-aos-delay="200"
          to="/about"
          class="mt-4"
          ><AtomsBadge type="red" variant="big"
            >More about me <Icon name="solar:alt-arrow-right-outline"
          /></AtomsBadge>
        </NuxtLink>
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <client-only>
          <Vue3Lottie
            animationLink="hero-animation.json"
            :height="260"
            :width="260"
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
