<template>
  <div class="flex flex-1 flex-col p-2">
    <NuxtLink
      class="text-lg text-blue-600 hover:underline"
      target="_blank"
      :to="project.uri_live"
    >
      {{ project?.name }}
    </NuxtLink>

    <p class="mb-2 font-normal text-gray-400">
      {{ useLocaleRenderer(project.description_en, project.description) }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import type { Project } from '~/types/project'
  interface Props {
    project: Project
  }

  const config = useRuntimeConfig()

  const props = defineProps<Props>()

  const skillsStore = useSkillsStore()
</script>
