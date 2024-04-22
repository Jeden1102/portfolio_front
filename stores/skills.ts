import { defineStore } from 'pinia'

interface State {
  [key: string]: CollectionValue[]
}

interface CollectionValue {
  [key: string]: string
}

export const useSkillsStore = defineStore('skills', {
  state: (): State => ({}),
  getters: {
    collection: (state) => {
      return (table: string) => state[table]
    },
    getSkillGroupID: (state) => {
      return (name: string) =>
        state.skillsGroup.find((s) => s.skill_en.toLowerCase() === name)?.id ??
        ''
    },
  },
  actions: {
    async fetchDbValues(table: string, key: string) {
      const client = useSupabaseClient()
      const { data, error } = await client.from(table).select('*')

      if (error) {
        console.log(error)
        this[key] = []
        return false
      }

      this[key] = data

      return true
    },

    async fetchSkillsByGroup(group: string) {
      const client = useSupabaseClient()
      const { data, error } = await client
        .from('skill')
        .select('*')
        .eq('skills_group', group)

      if (error) {
        console.log(error)
        this.skills = []
        return false
      }

      this.skills = data

      return true
    },
  },
})
