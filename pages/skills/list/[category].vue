<template>
  <div class="flex flex-wrap gap-4">
    <template v-if="category === 'projects'">
      <SkillsProject
        v-if="skillsStore.projects"
        v-for="project in skillsStore.projects"
        :project="project"
      />
      <div v-else>Loading...</div>
    </template>
    <template v-else>
      <SkillsSkill
        v-if="!skillsStore.skills"
        v-for="skill in skillsStore.skills"
        :skill="skill"
      />
      <SkillsSkillLoader v-for="i in 10" v-else />
    </template>
  </div>
</template>

<script setup lang="ts">
  const skillsStore = useSkillsStore()

  const route = useRoute()

  const category = route.params.category.toString()

  watch(
    () => skillsStore.skillsGroup,
    () => {
      fetchSkillData()
    },
  )

  const fetchSkillData = () => {
    if (category === 'projects') {
      skillsStore.fetchDbValues('projects', 'projects')
    } else {
      const skillGroupID = skillsStore.getSkillGroupID(category)
      skillsStore.fetchSkillsByGroup(skillGroupID)
    }
  }

  onMounted(() => {
    if (!skillsStore.skillsGroup) return
    fetchSkillData()
  })
</script>
