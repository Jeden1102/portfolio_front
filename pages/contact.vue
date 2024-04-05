<template>
  <div
    class="container-custom mx-auto flex flex-col items-center px-4 py-8 md:flex-row md:gap-8 lg:gap-20 lg:py-16"
  >
    <div>
      <ContactHeader />
      <div class="hidden md:block">
        <ContactDirect />
        <ContactSocials />
      </div>
    </div>
    <ContactForm />
    <div class="block md:hidden w-full">
      <ContactDirect />
      <ContactSocials />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
