<template>
  <header
    class="container-custom flex justify-center gap-8 py-4 lg:items-center lg:justify-between lg:gap-4"
  >
    <NuxtLink to="/" class="flex gap-2 text-xl">
      <p class="">
        Dominik
        <span class="text-primary">Raducki</span>
      </p>
      <img width="24" height="24" src="@/assets/images/logo-icon.png" alt="" />
    </NuxtLink>
    <MoleculesMainNav />
    <MoleculesLanguageSwitcher />
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
</script>
