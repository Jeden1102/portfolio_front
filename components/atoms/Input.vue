<template>
  <label
    v-if="label"
    :for="id"
    class="my-2 block text-sm font-medium text-gray-300"
    >{{ label }}</label
  >
  <input
    :type="type"
    :id="id"
    :placeholder="placeholder ? placeholder : ''"
    :class="`atoms-input ${customClass ? customClass : ''} ${errorMsg ? 'border border-red-300 bg-red-50' : ''}`"
    :required="required"
    @input="() => emits('update:modelValue', value)"
    @change="() => emits('onValueChange')"
    v-model="value"
  />
  <span v-if="errorMsg" class="mt-1 text-sm text-red-300">{{ errorMsg }}</span>
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
    modelValue: string
    errorMsg?: string | string | Ref<string>
  }

  const value = ref('')

  const props = defineProps<Props>()

  const emits = defineEmits(['update:modelValue', 'onValueChange'])
</script>
