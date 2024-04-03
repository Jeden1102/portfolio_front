<template>
  <label
    v-if="label"
    :for="id"
    class="block text-sm font-medium text-gray-300"
    >{{ label }}</label
  >
  <textarea
    :id="id"
    :placeholder="placeholder ? placeholder : ''"
    :class="`atoms-input ${customClass ? customClass : ''}`"
    :required="required"
    rows="6"
    @keyup="() => emits('onKeyUp')"
  ></textarea>
</template>

<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'

  interface Props {
    customClass?: string
    placeholder?: string
    type?: string
    id?: string
    required?: boolean
    label?: boolean
  }

  const props = defineProps<Props>()

  const emits = defineEmits(['onKeyUp'])
</script>
