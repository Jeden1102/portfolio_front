import type { AtomsTextarea } from '#build/components';
<template>
  <form action="#" class="flex flex-col gap-2">
    <AtomsInput
      type="email"
      id="email"
      placeholder="name@flowbite.com"
      required
      label="Your e-mail"
      v-model="formData.email"
    />
    <AtomsInput
      type="text"
      id="subject"
      placeholder="Just a question"
      label="Subject"
      v-model="formData.subject"
    />
    <AtomsTextarea
      id="message"
      placeholder="Hi! I'd like to ask for..."
      label="Message"
      v-model="formData.message"
    />
    <AtomsButton custom-class="flex justify-center mt-4" type="submit"
      >Send message</AtomsButton
    >
  </form>
</template>

<script setup lang="ts">
  const formData = ref({
    email: '',
    subject: '',
    message: '',
  })
</script>

<style scoped></style>
