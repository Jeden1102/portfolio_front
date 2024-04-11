<template>
  <div class="app bg-secondary">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div class="absolute left-0 top-0 h-full w-full overflow-hidden">
      <div class="absolute bottom-0 left-0 rotate-45">
        <client-only>
          <Vue3Lottie
            animationLink="bg-animation.json"
            :height="1000"
            :width="500"
          />
        </client-only>
      </div>
      <div class="absolute bottom-0 right-0 rotate-45">
        <client-only>
          <Vue3Lottie
            animationLink="bg-animation.json"
            :height="1000"
            :width="500"
          />
        </client-only>
      </div>
    </div>
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
    title: 'My App',
    meta: [
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
    ],
  })
</script>
