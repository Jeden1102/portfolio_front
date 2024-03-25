<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
  .app {
    &__view {
      & > div,
      section {
        min-height: calc(100vh - 100px);
      }
    }
  }
</style>
