<template>
  <div
    class="bg-secondary relative mx-auto flex min-h-[80vh] flex-col items-center justify-center px-8 py-4 text-white lg:gap-4"
  >
    <div></div>
    <h1 class="text-2xl font-bold lg:text-7xl">Hello! I'm Dominik</h1>
    <p>FrontEnd Developer</p>
    <p>Main skills</p>
    <div class="flex"></div>
    <div>
      <client-only>
        <Vue3Lottie animationLink="/lottie/hero.json" />
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
