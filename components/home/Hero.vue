<template>
  <div class="relative flex h-full bg-secondary py-4 text-white">
    <div
      class="container-custom flex flex-col items-center justify-center gap-10 md:flex-row lg:gap-52"
      data-aos="fade-up"
    >
      <div
        class="flex flex-col items-center gap-2 md:items-start"
        data-aos="fade-up"
      >
        <h1
          data-aos="fade-up"
          class="text-3xl font-bold md:text-4xl lg:text-7xl"
        >
          Hello! <span class="font-light">I'm Dominik</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          class="mb-4 text-sm font-light md:text-lg"
        >
          FrontEnd Developer
        </p>
        <p data-aos="fade-up" data-aos-delay="150">
          {{ $t('home.hero.mainSkills') }}
        </p>
        <HomeMainSkills />
        <NuxtLink
          data-aos="fade-up"
          data-aos-delay="200"
          to="/about"
          class="mt-4"
          ><AtomsBadge type="red" variant="medium"
            >{{ $t('home.hero.more') }}
            <Icon name="solar:alt-arrow-right-outline"
          /></AtomsBadge>
        </NuxtLink>
      </div>
      <div class="w-full md:w-auto" data-aos="fade-up" data-aos-delay="200">
        <div class="h-52 md:h-96">
          <client-only>
            <Vue3Lottie animationLink="hero-animation.json" height="100%" />
          </client-only>
        </div>
        <div class="mt-4 flex w-full gap-4 lg:mt-10">
          <NuxtLink
            class="atoms-button flex w-full justify-center text-center"
            to="/skills"
          >
            {{ $t('home.hero.skills') }}
          </NuxtLink>
          <NuxtLink
            class="atoms-button light flex w-full justify-center text-center"
            to="/skills"
          >
            {{ $t('home.hero.contact') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Vue3Lottie } from 'vue3-lottie'

  const client = useSupabaseClient()

  const { data: main_page } = await useAsyncData('main_page', async () => {
    const { data } = await client
      .from('main_page')
      .select('heading, heading_en')
      .single()

    return data
  })
</script>
