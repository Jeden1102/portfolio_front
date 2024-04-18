<template>
  <div class="flex flex-wrap gap-2">
    <AtomsBadge v-for="skill in softSkills">
      {{ useLocaleRenderer(skill.skill_en, skill.skill) }}
    </AtomsBadge>
  </div>
</template>
<script setup lang="ts">
  import type { SoftSkill } from '../../types/skill.ts'

  const softSkills = ref<SoftSkill[]>([])

  const client = useSupabaseClient()

  const getData = async () => {
    const { data, error } = await client.from('soft_skills').select('*')

    if (error) {
      console.log(error)
      return
    }
    softSkills.value = data
  }

  onMounted(async () => {
    getData()
  })
</script>
