<template>
  <ol class="relative my-8 ml-4 border-s border-gray-200">
    <li
      class="mb-10 ms-6"
      v-for="i in 5"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <span
        class="absolute flex h-6 w-6 -translate-x-10 items-center justify-center rounded-full bg-red-100 ring-8 ring-white"
      >
        <Icon class="text-lg text-primary" name="solar:suitcase-outline" />
      </span>
      <h3 class="mb-1 flex items-center text-lg font-semibold text-gray-100">
        Flowbite Application UI v2.0.0
      </h3>
      <time class="mb-2 block text-sm font-normal leading-none text-gray-200"
        >Released on January 13th, 2022</time
      >
      <p class="mb-4 text-base font-normal text-gray-300">
        Get access to over 20+ pages including a dashboard layout, charts,
        kanban board, calendar, and pre-order E-commerce & Marketing pages.
      </p>
    </li>
  </ol>
</template>
