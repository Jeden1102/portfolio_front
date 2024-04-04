<template>
  <div
    class="rounded text-gray-800"
    :class="[variantClasses[type], typeClasses[variant]]"
  >
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
  type badgeType = 'white' | 'red'
  type badgeVariant = 'small' | 'medium' | 'big'

  interface Props {
    type?: badgeType
    variant?: badgeVariant
  }

  const variantClasses = {
    red: 'bg-red-100 text-red-800',
    white: 'bg-gray-100',
  }

  const typeClasses = {
    small: 'px-2.5 py-0.5 text-xs font-medium',
    medium: 'px-1.5 text-sm py-1 font-medium',
    big: 'px-4 py-1.5 text-md font-medium',
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'white',
    variant: 'small',
  })
</script>
