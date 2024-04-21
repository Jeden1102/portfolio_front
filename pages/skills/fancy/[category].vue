<template>
  <div class="flex flex-col">
    <SkillsFancyProject
      v-for="project in category === 'projects'
        ? skillsStore.projects
        : skillsStore.skills"
      :project="project"
    />
    <SkillsFancyLoader v-for="i in 8" v-if="showLoader()" />
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
