<template>
  <div class="text-gray-200">
    <p
      class="text-center md:text-left font-light sm:text-xl"
      v-if="headingData"
      v-html="useLocaleRenderer(headingData.heading_en, headingData.heading)"
    ></p>
    <p class="text-center md:text-left md:hidden">
      {{ $t('contact.header.or') }}
    </p>
    <NuxtLink
      @click="scrollToBottom"
      class="block animate-bounce text-center md:text-left font-bold md:hidden"
    >
      {{ $t('contact.header.other') }}
      <Icon name="solar:alt-arrow-down-outline" />
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

  const headingData = ref<ContactHero | null>(null)

  const client = useSupabaseClient()

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight)
  }

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
