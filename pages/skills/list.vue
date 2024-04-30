<template>
  <div class="flex flex-col flex-wrap gap-2">
    <div class="flex flex-wrap gap-2">
      <NuxtLink
        class="w-fit cursor-pointer"
        v-for="skill in skills.collection('skillsGroup')"
        :to="prepareUrl(skill.skill_en)"
      >
        <AtomsBadge variant="big" custom-class="gap-1">
          <span>{{ useLocaleRenderer(skill.skill_en, skill.skill) }}</span>
          <Icon class="text-lg" :name="skill.skill_icon" />
        </AtomsBadge>
      </NuxtLink>
    </div>

    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
  const skills = useSkillsStore()

  const prepareUrl = (slug: string) => {
    return `/skills/list/${slug.toLowerCase()}`
  }
</script>
