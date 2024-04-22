<template>
  <div class="group relative w-fit text-gray-800">
    <button class="relative w-fit text-blue-500">
      {{ button }}
    </button>
    <span
      class="pointer-events-none absolute -left-12 bottom-6 z-10 min-w-72 translate-y-2 rounded-md border border-gray-300 bg-white px-3 py-2 opacity-0 shadow-sm transition-all group-hover:translate-y-0 group-hover:opacity-100"
    >
      {{ tooltip }}
    </span>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    button: string
    tooltip: string
  }

  const props = defineProps<Props>()
</script>
