<template>
  <nav
    class="justfiy-between items-between fixed bottom-0 left-0 z-50 flex w-full gap-2 rounded-t-lg bg-gray-100 px-2 py-1 shadow-sm lg:relative lg:ml-auto lg:mr-4 lg:w-fit lg:flex-row lg:gap-8 lg:bg-transparent lg:py-4"
  >
    <NuxtLink class="menu-link" to="/">
      <Icon name="solar:home-angle-linear" class="text-xl lg:hidden" />
      <span>Home</span>
    </NuxtLink>
    <NuxtLink class="menu-link" to="/about">
      <Icon name="solar:info-square-linear" class="text-xl lg:hidden" />
      <span>About me</span>
    </NuxtLink>
    <NuxtLink class="menu-link" to="/skills">
      <Icon name="solar:clapperboard-edit-broken" class="text-xl lg:hidden" />
      <span>Skills&Projects</span>
    </NuxtLink>
    <NuxtLink class="menu-link" to="/contact">
      <Icon name="solar:chat-square-call-linear" class="text-xl lg:hidden" />
      <span>Contact</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    .menu-link {
      @apply flex flex-1 flex-col items-center justify-center py-2 text-xs  text-gray-700 lg:flex-auto lg:text-sm;
      span {
        @apply hidden lg:block;
      }
      svg {
        @apply lg:hidden;
      }
      &.router-link-active {
        @apply bg-gray-300 bg-opacity-25 lg:bg-transparent;
        span {
          @apply block;
        }
      }
    }
  }
</style>
