<template>
  <div class="flex flex-col">
    <SkillsFancyProject
      v-for="project in category === 'projects'
        ? skillsStore.projects
        : skillsStore.skills"
      :project="project"
    />
    <SkillsFancyLoader v-for="i in 8" v-if="showLoader()" />
    <SkillsFancyEmpty
      v-if="isFalseCategory"
      :phrase="category"
      :phrases="skillsStore.skillsGroup"
    />
  </div>
</template>

<script setup lang="ts">
  const skillsStore = useSkillsStore()

  const route = useRoute()

  const category = route.params.category.toString()

  const isFalseCategory = ref(false)

  const showLoader = () => {
    if (isFalseCategory.value) return false

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

  const fetchSkillData = async () => {
    if (category === 'projects') {
      await skillsStore.fetchDbValues('projects', 'projects')
    } else {
      const skillGroupID = await skillsStore.getSkillGroupID(category)
      const res = await skillsStore.fetchSkillsByGroup(skillGroupID)
      isFalseCategory.value = !res
    }
  }

  onMounted(() => {
    if (!skillsStore.skillsGroup) return
    fetchSkillData()
  })
</script>
