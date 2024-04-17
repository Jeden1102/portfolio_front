<template>
  <div class="text-gray-200">
    <p
      class="text-center font-light sm:text-xl"
      v-html="locale === 'en' ? headingData?.heading_en : headingData?.heading"
    ></p>
    <p class="text-center md:hidden">-OR-</p>
    <NuxtLink
      href="#contact-options"
      class="block animate-bounce text-center font-bold md:hidden"
    >
      Show other contact options <Icon name="solar:alt-arrow-down-outline" />
    </NuxtLink>
    <client-only>
      <Vue3Lottie
        animationLink="/contact-animation.json"
        :height="150"
        :width="150"
      />
    </client-only>
  </div>
</template>

<script setup lang="ts">
  import { Vue3Lottie } from 'vue3-lottie'

  import type { ContactHero } from '../../types/contact'

  const { locale } = useI18n()

  const headingData = ref<ContactHero | null>(null)

  const client = useSupabaseClient()

  const getData = async () => {
    const { data, error } = await client
      .from('contact_page')
      .select('*')
      .single()

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
