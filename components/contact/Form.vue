import type { AtomsTextarea } from '#build/components';
<template>
  <form action="#" class="flex flex-col gap-2">
    <AtomsInput
      type="email"
      id="email"
      placeholder="name@flowbite.com"
      required
      label="Your e-mail"
    />
    <AtomsInput
      type="text"
      id="subject"
      placeholder="Just a question"
      label="Subject"
    />
    <AtomsTextarea
      id="message"
      placeholder="Hi! I'd like to ask for..."
      label="Message"
    />
    <AtomsButton type="submit">Send message</AtomsButton>
  </form>
</template>

<script setup lang="ts"></script>

<style scoped></style>
