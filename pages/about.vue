<template>
  <div
    class="container-custom my-8 flex flex-col gap-8 text-gray-200 md:flex-row"
  >
    <div
      class="mb-6 flex flex-col gap-2 rounded-md"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <p class="text-lg lg:text-2xl" data-aos="fade-up" data-aos-delay="150">
        Hi! I'm Dominik Raducki - FrontEnd developer with more than
        <b>2 years of commercial experience.</b>
      </p>

      <h1 class="text-lg">Soft skills</h1>
      <div class="flex max-w-52 flex-wrap gap-2">
        <AtomsBadge>Nuxt</AtomsBadge>
        <AtomsBadge>Vue</AtomsBadge>
        <AtomsBadge>React</AtomsBadge>
        <AtomsBadge>TS</AtomsBadge>
        <AtomsBadge>PHP</AtomsBadge>
        <AtomsBadge>Drupal</AtomsBadge>
      </div>
      <client-only>
        <Vue3Lottie
          animationLink="about-animation.json"
          :height="250"
          :width="250"
        />
      </client-only>
      <NuxtLink
        class="atoms-button mx-auto my-8 flex w-fit justify-center text-center"
        to="/skills"
      >
        Skills&Projects
      </NuxtLink>
    </div>
    <div>
      <p data-aos="fade-up" data-aos-delay="200">
        Let me introduce myself to make you know me better. On the timeline
        below there are the most important moments of my career.
      </p>
      <MoleculesTimeline />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
