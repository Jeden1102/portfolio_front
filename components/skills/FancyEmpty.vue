<template>
  <div class="text-gray-800">
    <p v-html="$t('skills.empty', { phrase: phrase })"></p>
    <p>{{ $t('skills.tips') }}</p>
    <p class="mt-2">{{ $t('skills.useOneOfPhrase') }}</p>
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
