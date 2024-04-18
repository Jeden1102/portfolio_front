<template>
  <div
    class="flex min-w-60 flex-1 flex-col gap-2 rounded-lg border border-gray-800 bg-gray-900 p-4 shadow"
  >
    <ImgComparisonSlider value="0">
      <img
        class="mx-auto h-52 w-full rounded-md object-cover"
        :src="getImgUri(project.file_desktop)"
        alt=""
        slot="first"
      />
      <img
        class="mx-auto h-52 w-full rounded-md object-cover"
        :src="getImgUri(project.file)"
        alt=""
        slot="second"
      />
    </ImgComparisonSlider>

    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
      {{ project?.name }}
    </h5>
    <p class="mb-3 font-normal text-gray-400">
      {{ useLocaleRenderer(project.description_en, project.description) }}
    </p>
    <div class="mt-4 flex w-full gap-2 lg:mt-10">
      <NuxtLink
        class="atoms-button flex w-full justify-center gap-2 text-center"
        :to="project.uri_live"
      >
        {{ $t('skills.live') }}
        <Icon class="text-xl" name="iconoir:internet" />
      </NuxtLink>
      <NuxtLink
        class="atoms-button light flex w-full justify-center gap-2 text-center"
        :to="project.uri_github"
      >
        {{ $t('skills.code') }}
        <Icon name="ri:code-s-slash-line" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ImgComparisonSlider } from '@img-comparison-slider/vue'
  import type { Project } from '~/types/project'
  interface Props {
    project: Project
  }

  const config = useRuntimeConfig()

  const getImgUri = (path: string) => {
    return `${config.public.supabase.url}/storage/v1/object/public/skills/${path}`
  }

  const props = defineProps<Props>()
</script>
