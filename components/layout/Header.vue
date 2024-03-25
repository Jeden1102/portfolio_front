<template>
  <header
    class="container-custom flex justify-between py-4 lg:items-center lg:gap-4"
  >
    <div class="flex gap-2">
      <span>Dominik Raducki</span>
      <img width="24" height="24" src="@/assets/images/logo-icon.png" alt="" />
    </div>
    <MoleculesMainNav />
    <MoleculesLanguageSwitcher />
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
</script>
