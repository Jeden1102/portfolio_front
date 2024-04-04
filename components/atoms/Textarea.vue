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
    v-model="value"
    @input="() => emits('update:modelValue', value)"
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
    label?: string
  }

  const props = defineProps<Props>()

  const value = ref('')

  const emits = defineEmits(['update:modelValue'])
</script>
