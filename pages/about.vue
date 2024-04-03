<template>
  <div class="container-custom my-4 text-gray-200">
    <div class="mb-4 rounded-md" data-aos="fade-up" data-aos-delay="100">
      <client-only>
        <Vue3Lottie
          animationLink="about-animation.json"
          :height="200"
          :width="200"
        />
      </client-only>
    </div>

    <p class="text-lg" data-aos="fade-up" data-aos-delay="150">
      Hi! I'm Dominik Raducki - FrontEnd developer with more than
      <b>2 years of commercial experience.</b>
    </p>
    <p data-aos="fade-up" data-aos-delay="200">
      Let me introduce myself to make you know me better. On the timeline below
      there are the most important moments of my career.
    </p>
    <MoleculesTimeline />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
