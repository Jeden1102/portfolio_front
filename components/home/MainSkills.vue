<template>
  <div class="flex flex-wrap gap-2">
    <AtomsBadge v-for="skill in mainSkills">{{ skill.name }}</AtomsBadge>
  </div>
</template>
<script setup lang="ts">
  import type { Skill } from '../../types/skill.ts'

  const mainSkills = ref<Skill[]>([])

  const client = useSupabaseClient()

  const getData = async () => {
    const { data, error } = await client
      .from('skill')
      .select('name')
      .eq('is_main', 1)

    if (error) {
      console.log(error)
      return
    }
    mainSkills.value = data
  }

  onMounted(async () => {
    getData()
  })
</script>
