<template>
  <nav
    class="justfiy-between items-between fixed bottom-0 left-0 flex w-full gap-2 border-t border-gray-200 bg-white shadow-sm lg:flex-row lg:py-4 xl:gap-8"
  >
    <NuxtLink class="menu-link" to="/">
      <Icon name="iconamoon:home-light" class="text-xl" />
      Home
    </NuxtLink>
    <NuxtLink class="menu-link" to="/">
      <Icon name="iconamoon:home-light" class="text-xl" />
      Home
    </NuxtLink>
    <NuxtLink class="menu-link" to="/">
      <Icon name="iconamoon:home-light" class="text-xl" />
      Home
    </NuxtLink>
    <NuxtLink class="menu-link" to="/">
      <Icon name="iconamoon:home-light" class="text-xl" />
      Home
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @layer base {
    .menu-link {
      @apply flex flex-1 flex-col items-center border py-2 text-sm lg:text-sm;
    }
  }
</style>
