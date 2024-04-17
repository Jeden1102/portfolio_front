<template>
  <div v-if="category === 'projects'">
    <SkillsProject v-for="project in skillsStore.projects" :project="project" />
  </div>
  <div v-else>
    <SkillsSkill v-for="skill in skillsStore.skills" :skill="skill" />
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
