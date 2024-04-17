<template>
  <div class="container-custom skills flex flex-col gap-8 py-4">
    {{ skills.collection('skillsGroup') }}
    <div class="flex gap-2">
      <NuxtLink to="/skills/list"
        ><AtomsBadge variant="big">{{
          $t('skills.list')
        }}</AtomsBadge></NuxtLink
      >
      <NuxtLink to="/skills/fancy"
        ><AtomsBadge variant="big">{{
          $t('skills.fancy')
        }}</AtomsBadge></NuxtLink
      >
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
  import { useSkillsStore } from '@/stores/skills'

  const skills = useSkillsStore()

  onMounted(async () => {
    await skills.fetchDbValues('skills_group', 'skillsGroup')
  })
</script>
