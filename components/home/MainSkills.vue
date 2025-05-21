<template>
  <div class="flex flex-wrap gap-2">
    <AtomsBadge v-for="skill in mainSkills">{{ skill.name }}</AtomsBadge>
  </div>
</template>
<script setup lang="ts">
  import type { Skill } from '../../types/skill.ts'

  const mainSkills = ref<Skill[]>([])

  const getData = async () => {}

  onMounted(async () => {
    getData()
  })
</script>
