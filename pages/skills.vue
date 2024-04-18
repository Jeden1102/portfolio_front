<template>
  <div class="container-custom skills flex flex-col gap-8 py-4">
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
  const skills = useSkillsStore()

  definePageMeta({
    pageTransition: false,
  })

  onMounted(async () => {
    await skills.fetchDbValues('skills_group', 'skillsGroup')
  })
</script>
