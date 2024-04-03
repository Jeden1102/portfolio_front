<template>
  <div class="app bg-secondary">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
  .app {
    &__view {
      & > div,
      section {
        min-height: calc(100vh - 120px);
        padding-bottom: 60px !important;
      }
    }
  }
</style>
