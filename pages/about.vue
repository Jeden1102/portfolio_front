<template>
  <div
    class="container-custom w-full my-8 flex flex-col items-center gap-8 text-gray-200 md:flex-row lg:gap-20"
  >
    <div
      class="mb-6 flex flex-col gap-2 rounded-md flex-1"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <p
        class="text-lg lg:text-2xl"
        data-aos="fade-up"
        data-aos-delay="150"
        v-if="headingData"
        v-html="useLocaleRenderer(headingData.heading_en, headingData.heading)"
      ></p>

      <h1 class="text-lg">{{ $t('about.softSkills') }}</h1>
      <AboutSoftSkills />
      <client-only>
        <Vue3Lottie
          animationLink="/about-animation.json"
          :height="250"
          :width="250"
        />
      </client-only>
      <NuxtLink
        class="atoms-button mx-auto mb-4 mt-4 flex w-fit justify-center text-center"
        to="/skills/list/frontend"
      >
        {{ $t('skillsPage') }}
      </NuxtLink>
      <NuxtLink
        href="#journey"
        class="animate-bounce text-center font-bold md:hidden"
      >
        {{ $t('about.myJourney') }} <Icon name="solar:alt-arrow-down-outline" />
      </NuxtLink>
    </div>
    <div id="journey" class="py-4 flex flex-col flex-1">
      <p data-aos="fade-up" data-aos-delay="200">
        {{ $t('about.title') }}
      </p>
      <AboutTimeline />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { Vue3Lottie } from 'vue3-lottie'

  import type { HomeHero } from '../types/home.ts'

  const headingData = ref<HomeHero | null>(null)

  const client = useSupabaseClient()

  const getData = async () => {
    const { data, error } = await client.from('about_page').select('*').single()

    if (error) {
      console.log(error)
      return
    }
    headingData.value = data
  }

  onMounted(async () => {
    getData()
  })
</script>
