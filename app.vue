<template>
  <div class="app bg-secondary">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <MoleculesAppBgAnimations />
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
    title: 'Dominik Raducki Portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `${titleChunk} | Dominik Raducki Portfolio`
        : 'Dominik Raducki Portfolio'
    },
    meta: [
      {
        name: 'description',
        content:
          'Frontend developer with more than 2 years of commercial experience. Skilled in Vue, Typescript, Nuxt and Drupal.',
      },
    ],
  })
</script>
