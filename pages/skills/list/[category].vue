<template>
  <div class="flex flex-col gap-4">
    <div class="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <SkillsProject
        v-if="category === 'projects'"
        v-for="project in skillsStore.projects"
        :project="project"
      />
      <SkillsSkill v-else v-for="skill in skillsStore.skills" :skill="skill" />
      <SkillsCardLoader v-for="i in 8" v-if="showLoader()" />
    </div>
    <p class="font-light text-gray-300" v-if="category === 'projects'">
      {{ $t('skills.infoProjects') }}
    </p>
    <p class="font-light text-gray-300" v-else>
      {{ $t('skills.infoSkills') }}
    </p>
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
