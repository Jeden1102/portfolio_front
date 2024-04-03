<template>
  <label
    v-if="label"
    :for="id"
    class="block text-sm font-medium text-gray-300"
    >{{ label }}</label
  >
  <input
    :type="type"
    :id="id"
    :placeholder="placeholder ? placeholder : ''"
    :class="`atoms-input ${customClass ? customClass : ''}`"
    :required="required"
    @input="(event) => emits('update:modelValue', value)"
    v-model="value"
  />
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
    modelValue: string
  }

  const value = ref('')

  const props = defineProps<Props>()

  const emits = defineEmits(['update:modelValue'])
</script>
