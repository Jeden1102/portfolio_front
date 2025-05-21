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
    async fetchDbValues(table: string, key: string) {},

    async fetchSkillsByGroup(group: string) {},
  },
})
