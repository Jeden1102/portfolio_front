<template>
  <header class="bg-white">
    <div
      class="container-custom relative flex justify-center gap-8 bg-white py-2 md:py-4 lg:items-center lg:justify-between lg:gap-4"
    >
      <NuxtLink to="/" class="flex gap-2 text-xl">
        <p class="">
          <span class="text-gray-600">Dominik</span>
          <span class="text-primary">Raducki</span>
        </p>
        <img
          width="24"
          height="24"
          src="@/assets/images/logo-icon.png"
          alt=""
        />
      </NuxtLink>
      <MoleculesMainNav />
      <MoleculesLanguageSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts"></script>
