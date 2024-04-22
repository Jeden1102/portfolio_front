<template>
  <div class="mb-4 mt-8 flex flex-col gap-2 text-gray-100 sm:flex-row">
    <NuxtLink :href="`tel:${contact.phone}`">
      <AtomsBadge variant="big">
        <Icon class="mr-2 text-xl" name="solar:phone-linear" />
        <span>{{ props.contact.phone }}</span>
      </AtomsBadge>
    </NuxtLink>
    <NuxtLink :href="`mailto:${contact.email}`">
      <AtomsBadge variant="big">
        <Icon class="mr-2 text-xl" name="solar:map-arrow-right-linear" />
        <span>{{ props.contact.email }}</span>
      </AtomsBadge>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import type { ContactLinks } from '../../types/contact'

  const props = defineProps<{
    contact: ContactLinks
  }>()
</script>
