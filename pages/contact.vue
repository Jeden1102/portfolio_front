<template>
  <div class="flex flex-col items-center justify-center">
    <div
      v-if="contactData"
      class="container-custom mx-auto flex flex-col items-center px-4 py-8 md:flex-row md:gap-8 lg:gap-20 lg:py-16"
    >
      <div class="w-full">
        <ContactHeader />
        <div class="hidden md:block">
          <ContactDirect :contact="contactData" />
          <ContactSocials :contact="contactData" />
        </div>
      </div>
      <ContactForm />
      <div class="block w-full md:hidden">
        <ContactDirect :contact="contactData" />
        <ContactSocials :contact="contactData" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ContactLinks } from '../types/contact'

  const contactData = ref<ContactLinks | null>(null)

  useHead({
    title: 'Contact',
  })

  const getData = async () => {}

  onMounted(async () => {
    getData()
  })
</script>
