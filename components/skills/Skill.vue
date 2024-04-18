<template>
  <div
    class="max-w-sm rounded-lg border border-gray-800 bg-gray-900 p-6 shadow"
  >
    <Icon class="mb-3 text-4xl" :name="skill.icon_name" />
    <a href="#">
      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
        {{ skill.name }}
      </h5>
    </a>
    <p class="mb-3 font-normal text-gray-400">
      {{ skill.description_en }}
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
