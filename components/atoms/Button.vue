<template>
  <button
    @click="() => emits('onClick')"
    :class="`atoms-button ${customClass ? customClass : ''} ${props.active ? 'underline' : ''}`"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps<{
    customClass?: string
    target?: string
    uri?: string
    active?: boolean
  }>()

  const emits = defineEmits(['onClick'])
</script>
