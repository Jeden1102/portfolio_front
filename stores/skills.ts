import { defineStore } from 'pinia'

interface State {
  [key: string]: {}
}

export const useSkillsStore = defineStore('skills', {
  state: () => ({}) as State,
  getters: {
    collection: (state) => {
      return (table: string) => state[table]
    },
  },
  actions: {
    async fetchDbValues(table: string, key: string) {
      const client = useSupabaseClient()
      const { data, error } = await client.from(table).select('*')

      if (error) {
        console.log(error)
        return
      }

      this[key] = data
    },
  },
})
