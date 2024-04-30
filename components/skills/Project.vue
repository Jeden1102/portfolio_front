<template>
  <div
    class="flex min-w-60 flex-1 flex-col rounded-lg border border-gray-800 bg-gray-900 p-4 shadow"
  >
    <ImgComparisonSlider value="0" class="image-slider">
      <img
        class="mx-auto h-52 w-full rounded-md object-cover"
        :src="getImgUri(project.file_desktop)"
        alt="First project image"
        loading="lazy"
        slot="first"
      />
      <img
        class="mx-auto h-52 w-full rounded-md object-cover"
        :src="getImgUri(project.file)"
        alt="Second project image"
        loading="lazy"
        slot="second"
      />
    </ImgComparisonSlider>

    <h5 class="my-2 text-2xl font-semibold tracking-tight text-white">
      {{ project?.name }}
    </h5>

    <p class="mb-1 font-normal text-gray-400">
      {{ useLocaleRenderer(project.description_en, project.description) }}
    </p>

    <p class="font-semibold">
      {{ $t('skills.features') }}
    </p>
    <div v-for="feature in projectFeatures" class="flex items-center gap-2">
      <Icon class="min-w-4" name="solar:check-square-bold-duotone" />
      <span>
        {{ useLocaleRenderer(feature.project_feature_en , feature.project_feature) }}
      </span>
    </div>

    <p class="mb-1 mt-2 font-semibold">{{ $t('skills.technologies') }}</p>
    <div class="flex flex-wrap gap-2">
      <AtomsBadge
        v-for="skill in projectSkills"
        variant="small"
        custom-class="gap-1 w-fit"
      >
        <span>{{ skill.name }}</span>
      </AtomsBadge>
    </div>

    <div class="mt-auto flex w-full gap-2 pt-4">
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

  const skillsStore = useSkillsStore()

  const projectFeatures = computed(() => {
    const allFeatures = skillsStore.project_feature

    if (!props.project.project_feature || !allFeatures) return

    return allFeatures.filter((feature) =>
      props.project.project_feature.includes(feature.id),
    )
  })

  const projectSkills = computed(() => {
    const allSkills = skillsStore.skill

    if (!props.project.skill || !allSkills) return

    return allSkills.filter((skill) => props.project.skill.includes(skill.id))
  })
</script>

<style>
  .image-slider:focus {
    outline: none;
  }
</style>
