<template>
  <div class="text-gray-800">
    <p>Podana fraza - {{ phrase }} - nie została odnaleziona.</p>
    <p>Podpowiedzi:</p>
    <p class="mt-2">Uzyj jednej z ponizszych fraz:</p>
    <ul class="list-disc pl-4">
      <li v-for="p in phrases">
        {{ p.skill_en }}
      </li>
    </ul>
    <client-only>
      <Vue3Lottie
        class="ml-0 mr-auto"
        animationLink="/error-animation.json"
        :height="250"
        :width="250"
      />
    </client-only>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    phrase?: string
    phrases?: object[]
  }

  const props = defineProps<Props>()
</script>
