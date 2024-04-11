<template>
  <div class="mt-6 flex gap-4 text-gray-100">
    <NuxtLink
      class="flex h-12 w-12 items-center justify-center rounded-md border border-gray-300 bg-gray-700 p-2"
      :to="contact.linkedin"
      target="_blank"
    >
      <Icon class="text-4xl" name="bx:bxl-linkedin" />
    </NuxtLink>
    <NuxtLink
      class="flex h-12 w-12 items-center justify-center rounded-md border border-gray-300 bg-gray-700 p-2"
      :to="contact.github"
      target="_blank"
    >
      <Icon class="text-4xl" name="mingcute:github-line" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import type { ContactLinks } from '../../types/contact'

  const props = defineProps<{
    contact: ContactLinks
  }>()
</script>
