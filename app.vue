<template>
  <div class="app bg-secondary">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <MoleculesAppBgAnimations />r
  </div>
</template>

<style lang="scss">
  .page-enter-active,
  .page-leave-active {
    transition: all 0.2s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
  .app {
    &__view {
      & > div,
      section {
        min-height: calc(100vh - 148px);
        padding-bottom: 60px !important;
      }
    }
  }
</style>
<script setup lang="ts">
  useHead({
    title: '',
    meta: [
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
    ],
  })
</script>
