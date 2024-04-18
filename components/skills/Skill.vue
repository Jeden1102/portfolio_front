<template>
  <div
    class="min-w-72 flex-1 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow"
  >
    <Icon
      v-if="skill.icon_name"
      class="mb-3 text-4xl"
      :name="skill.icon_name"
    />
    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
      {{ skill?.name }}
    </h5>
    <p class="mb-3 font-normal text-gray-400">
      {{ useLocaleRenderer(skill.description_en, skill.description) }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import type { Skill } from '~/types/skill'
  interface Props {
    skill: Skill
  }

  const props = defineProps<Props>()
</script>
