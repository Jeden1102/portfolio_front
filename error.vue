<template>
  <div class="app bg-secondary text-gray-200" v-if="error">
    <NuxtLayout>
      <div
        class="container-custom flex flex-col items-center justify-center py-4"
      >
        <h1 class="text-3xl font-bold md:text-5xl">
          {{ $t('error.error', { code: error.statusCode }) }}
        </h1>
        <client-only>
          <Vue3Lottie
            animationLink="/error-animation.json"
            :height="250"
            :width="250"
          />
        </client-only>
        <p>{{ $t('error.desc') }}</p>
        <button @click="handleError" class="atoms-button my-4" to="/">
          {{ $t('error.home') }}
        </button>
      </div>
    </NuxtLayout>
    <MoleculesAppBgAnimations />
  </div>
</template>
<script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps({
    error: Object as () => NuxtError,
  })
  const handleError = () => clearError({ redirect: '/' })
</script>
