<template>
  <div class="absolute right-4 top-1/2 z-50 -translate-y-1/2 lg:right-8">
    <div class="flex items-center justify-center gap-4">
      <label v-for="lang in languages" :key="lang.value" class="cursor-pointer">
        <input
          type="radio"
          :value="lang.value"
          v-model="locale"
          class="hidden"
        />
        <div
          :class="{
            'rounded bg-white bg-opacity-20 font-semibold text-primary hover:bg-opacity-30 lg:px-0':
              locale === lang.value,
            'bg-opacity-10 text-gray-700 hover:bg-opacity-20':
              locale !== lang.value,
          }"
        >
          {{ lang.label }}
        </div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { locale } = useI18n()

  const languages = ref([
    { label: 'EN', value: 'en' },
    { label: 'PL', value: 'pl' },
  ])
</script>
