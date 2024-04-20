<template>
  <div
    class="z-10 flex min-h-[70vh] flex-col items-center justify-center gap-8 rounded-md bg-white p-4"
    :class="{'bg-red-300' : isSubPageOpened}"
  >
    <img src="@/assets/images/google-logo.png" class="h-24" />
    <div
      class="relative h-12 w-full max-w-[584px] rounded-3xl border border-gray-200"
    >
      <img
        src="@/assets/images/search.svg"
        class="absolute left-3 top-1/2 h-5 -translate-y-1/2"
      />
      <input
        class="h-full w-full rounded-3xl pl-10 text-gray-700 hover:shadow-lg"
        type="text"
        v-model="searchValue"
      />
    </div>
    <div class="flex gap-2">
      <NuxtLink
        :class="`google-button ${!canNavigate ? 'pointer-events-none' : ''}`"
        :to="`/skills/fancy/${searchValue}`"
      >
        Szukaj w Google
      </NuxtLink>
      <button class="google-button">Szczęśliwy traf</button>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
  const searchValue = ref('')
  const route = useRouter();

  const canNavigate = computed(() => {
    return searchValue.value !== ''
  })

  const isSubPageOpened = computed(() => {
    return route.currentRoute.value.params.category;
  })
</script>

<style scoped></style>
