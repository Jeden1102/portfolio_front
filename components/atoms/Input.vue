<template>
  <input
    @keyup="() => emits('onKeyUp')"
    :placeholder="placeholder ? placeholder : ''"
    :class="`atoms-input ${customClass ? customClass : ''}`"
  />
</template>

<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps<{
    customClass?: string
    placeholder?: string
  }>()

  const emits = defineEmits(['onKeyUp'])
</script>
