<template>
  <div
    class="z-10 flex min-h-[70vh] flex-col gap-8 rounded-md bg-white p-8"
    :class="{ 'justify-center': !isSubPageOpened }"
  >
    <div
      class="flex w-full items-center gap-8"
      :class="{ 'flex-row': isSubPageOpened, 'flex-col': !isSubPageOpened }"
    >
      <img
        src="@/assets/images/google-logo.png"
        class="h-auto"
        :class="{ 'w-24': isSubPageOpened, 'w-52': !isSubPageOpened }"
      />
      <div
        class="relative h-12 w-full max-w-[584px] rounded-3xl border border-gray-200"
      >
        <input
          class="h-full w-full rounded-3xl text-gray-700 hover:shadow-lg"
          :class="{ 'pl-6': isSubPageOpened, 'pl-10': !isSubPageOpened }"
          type="text"
          @keyup.enter="$router.push({ path: searchValue })"
          v-model="searchValue"
        />

        <div
          class="absolute top-1/2 flex -translate-y-1/2 items-center justify-center gap-2"
          :class="{ 'right-5': isSubPageOpened, 'left-3': !isSubPageOpened }"
        >
          <button
            @click="searchValue = ''"
            v-if="isSubPageOpened"
            class="border-r border-gray-200 pr-2"
          >
            <img src="@/assets/images/clear.svg" class="w-5" />
          </button>

          <NuxtLink :to="`/skills/fancy/${searchValue}`">
            <img src="@/assets/images/search.svg" class="h-5" />
          </NuxtLink>
        </div>
      </div>
      <div v-if="!isSubPageOpened" class="flex gap-2">
        <NuxtLink
          :class="`google-button ${!canNavigate ? 'pointer-events-none' : ''}`"
          :to="`/skills/fancy/${searchValue}`"
        >
          Szukaj w Google
        </NuxtLink>
        <button class="google-button">Szczęśliwy traf</button>
      </div>
    </div>

    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
  const router = useRouter()
  const route = useRoute()

  const searchValue = ref(route.params.category?.toString() ?? '')

  const canNavigate = computed(() => {
    return searchValue.value !== ''
  })

  const isSubPageOpened = computed(() => {
    return router.currentRoute.value.params.category
  })
</script>

<style scoped></style>
