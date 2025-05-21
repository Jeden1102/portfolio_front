<template>
  <div
    class="container-custom my-8 flex w-full flex-col gap-8 text-gray-200 md:flex-row lg:gap-20"
  >
    <div
      class="mb-6 mt-5 flex flex-1 flex-col gap-2 rounded-md"
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
    <div id="journey" class="flex flex-1 flex-col py-4">
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

  useHead({
    title: 'About',
  })

  const headingData = ref<HomeHero | null>(null)

  const getData = async () => {}

  onMounted(async () => {
    getData()
  })
</script>
