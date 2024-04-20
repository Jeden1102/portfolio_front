<template>
  <div class="flex flex-wrap gap-4">
    <SkillsProject
      v-if="category === 'projects'"
      v-for="project in skillsStore.projects"
      :project="project"
    />
    <SkillsSkill v-else v-for="skill in skillsStore.skills" :skill="skill" />
    <SkillsCardLoader v-for="i in 8" v-if="showLoader()" />
  </div>
</template>

<script setup lang="ts">
  const skillsStore = useSkillsStore()

  const route = useRoute()

  const category = route.params.category.toString()

  const showLoader = () => {
    if (category === 'projects') {
      return !skillsStore.projects
    }

    return !skillsStore.skills
  }

  watch(
    () => skillsStore.skillsGroup,
    () => {
      fetchSkillData()
    },
  )

  const fetchSkillData = () => {
    if (category === 'projects') {
      skillsStore.fetchDbValues('projects', 'projects')
      skillsStore.fetchDbValues('project_feature', 'project_feature')
      skillsStore.fetchDbValues('skill', 'skill')
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
