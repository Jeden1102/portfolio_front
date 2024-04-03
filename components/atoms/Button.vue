<template>
  <button
    @click="() => emits('onClick')"
    :type="type"
    :class="`atoms-button ${customClass ? customClass : ''} ${props.active ? 'underline' : ''}`"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'

  type buttonType = 'button' | 'submit' | 'reset'

  interface Props {
    customClass?: string
    target?: string
    uri?: string
    active?: boolean
    type?: buttonType
  }

  const props = withDefaults(defineProps<Props>(), {
    customClass: '',
    target: '',
    uri: '',
    active: false,
    type: 'button',
  })

  const emits = defineEmits(['onClick'])
</script>
