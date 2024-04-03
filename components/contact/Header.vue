<template>
  <div class="text-gray-200">
    <p class="text-center font-light sm:text-xl">
      Have any questions? Want to contact me? Feel free to use the contact form
      below.
    </p>
    <p class="text-center">-OR-</p>
    <NuxtLink
      href="#contact-options"
      class="block animate-bounce text-center font-bold md:hidden"
    >
      Show other contact options <Icon name="solar:alt-arrow-down-outline" />
    </NuxtLink>
    <client-only>
      <Vue3Lottie
        animationLink="contact-animation.json"
        :height="150"
        :width="150"
      />
    </client-only>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
