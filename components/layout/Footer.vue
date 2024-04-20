<template>
  <footer
    class="hidden bg-gray-900 py-4 text-sm font-light text-gray-400 lg:block"
  >
    <div class="container-custom footer-links flex gap-4">
      <NuxtLink to="/"> {{ $t('homePage') }} </NuxtLink>
      <NuxtLink to="/about"> {{ $t('aboutPage') }} </NuxtLink>
      <NuxtLink to="/skills/list/frontend"> {{ $t('skillsPage') }} </NuxtLink>
      <NuxtLink to="/contact"> {{ $t('contactPage') }} </NuxtLink>
    </div>
  </footer>
</template>
