<template>
  <div>
    {{ project }}
  </div>
</template>

<script setup lang="ts">
  interface Props {
    project: object
  }
  const props = defineProps<Props>()
</script>
