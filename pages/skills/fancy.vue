<template>
  <div
    class="z-10 flex min-h-[70vh] flex-col gap-8 rounded-md bg-white p-8"
    :class="{ 'items-center justify-center': !isSubPageOpened }"
  >
    <div
      class="flex w-full items-center gap-8"
      :class="{
        'flex-col md:flex-row': isSubPageOpened,
        'flex-col': !isSubPageOpened,
      }"
    >
      <img
        src="/images/google-logo.png"
        loading="lazy"
        class="h-auto"
        :class="{ 'w-24': isSubPageOpened, 'w-52': !isSubPageOpened }"
      />
      <div
        class="relative h-12 w-full max-w-[584px] rounded-3xl border border-gray-200 text-red-500"
      >
        <input
          class="h-full w-full rounded-3xl text-gray-700 hover:shadow-lg"
          :class="{ 'pl-6': isSubPageOpened, 'pl-10': !isSubPageOpened }"
          type="text"
          @keyup.enter="navigateTo"
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
            <img src="/images/clear.svg" class="w-5" />
          </button>

          <NuxtLink :to="`/skills/fancy/${searchValue.toLowerCase()}`">
            <img src="/images/search.svg" class="h-5" />
          </NuxtLink>
        </div>
      </div>
      <div v-if="!isSubPageOpened" class="flex gap-2">
        <NuxtLink
          :class="`google-button ${!canNavigate ? 'pointer-events-none' : ''}`"
          :to="`/skills/fancy/${searchValue.toLowerCase()}`"
        >
          {{ $t('skills.googleSearch') }}
        </NuxtLink>
        <button @click="handleFeelingLucky" class="google-button">
          {{ $t('skills.feelingLucky') }}
        </button>
      </div>
    </div>
    <AtomsButtonToolTip
      v-if="!isSubPageOpened"
      button="Jak to dziala?"
      tooltip="Wpisz nazwe jednej z kategorii (np. 'frontend') w polu wyszukiwania, by poznac wiecej informacji o mnie :)"
    />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
  const router = useRouter()
  const route = useRoute()

  const skillsStore = useSkillsStore()

  const searchValue = ref(route.params.category?.toString() ?? '')

  const canNavigate = computed(() => {
    return searchValue.value !== ''
  })

  const isSubPageOpened = computed(() => {
    return router.currentRoute.value.params.category
  })

  const handleFeelingLucky = () => {
    const categories = skillsStore.collection('skillsGroup')

    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)]

    const categorySlug = randomCategory.skill_en.toLowerCase()

    searchValue.value = categorySlug

    router.push({
      path: `/skills/fancy/${categorySlug}`,
    })
  }

  const navigateTo = () => {
    router.push({
      path: `/skills/fancy/${searchValue.value}`,
    })
  }
</script>

<style scoped></style>
