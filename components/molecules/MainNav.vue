<template>
  <nav
    class="justfiy-between items-between fixed bottom-0 left-0 z-50 flex w-full gap-2 rounded-t-lg bg-gray-100 shadow-sm lg:relative lg:ml-auto lg:w-fit lg:flex-row lg:gap-8 lg:bg-transparent lg:py-4 lg:pr-32"
  >
    <NuxtLink class="menu-link group" to="/">
      <Icon name="solar:home-angle-linear" class="text-xl lg:hidden" />
      <span class="menu-link__text">{{ $t('homePage') }}</span>
      <span class="menu-link-hover"></span>
    </NuxtLink>

    <NuxtLink class="menu-link group" to="/about">
      <Icon name="solar:info-square-linear" class="text-xl lg:hidden" />
      <span class="menu-link__text">{{ $t('aboutPage') }}</span>
      <span class="menu-link-hover"></span>
    </NuxtLink>
    <NuxtLink class="menu-link group" to="/skills/list/frontend">
      <Icon name="solar:clapperboard-edit-broken" class="text-xl lg:hidden" />
      <span class="menu-link__text">{{ $t('skillsPage') }}</span>
      <span class="menu-link-hover"></span>
    </NuxtLink>
    <NuxtLink class="menu-link group" to="/contact">
      <Icon name="solar:chat-square-call-linear" class="text-xl lg:hidden" />
      <span class="menu-link__text">{{ $t('contactPage') }}</span>
      <span class="menu-link-hover"></span>
    </NuxtLink>
  </nav>
</template>
