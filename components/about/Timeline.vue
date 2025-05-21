<template>
  <ol class="relative my-8 ml-4 border-s border-gray-200">
    <li
      class="mb-10 ms-6"
      v-for="t in timeline"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <span
        class="absolute flex h-6 w-6 -translate-x-10 items-center justify-center rounded-full bg-red-100 ring-8 ring-white"
      >
        <Icon class="text-lg text-primary" :name="t.icon" />
      </span>
      <h3 class="mb-1 flex items-center text-lg font-semibold text-gray-100">
        {{ t.title }}
      </h3>
      <time class="mb-2 block text-sm font-normal leading-none text-gray-200">{{
        t.date
      }}</time>
      <p
        class="mb-4 text-base font-normal text-gray-300"
        v-html="useLocaleRenderer(t.description_en, t.description)"
      ></p>
    </li>
  </ol>
</template>

<script setup lang="ts">
  import type { Timeline } from '../../types/timeline.ts'

  const timeline = ref<Timeline[]>([])

  const getData = async () => {}

  onMounted(async () => {
    getData()
  })
</script>
