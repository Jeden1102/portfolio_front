<template>
  <button
    @click="() => emits('onClick')"
    :type="type"
    :disabled="isDisabled"
    :class="`atoms-button ${customClass ? customClass : ''} ${props.active ? 'underline' : ''}`"
  >
    <slot></slot>
    <Icon v-if="isLoading" class="ml-2 animate-spin" name="tabler:loader-2" />
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
    isLoading?: boolean
    isDisabled?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    customClass: '',
    target: '',
    uri: '',
    active: false,
    type: 'button',
    isLoading: false,
    isDisabled: false,
  })

  const emits = defineEmits(['onClick'])
</script>
