import { defineStore } from 'pinia'
import mainApi from '../api/mainApi'

export const useUserStore = defineStore('userStore', {

    state: () => ({
        loading: false
    }),

    getters: {
        getLoadingUser() {
            return this.loading
        }
    },

    actions: {
       async fetchUsers() {
        this.loading = true
        try {
            const { data } = await mainApi.get('/users')
            const users = JSON.parse(data.data)
            this.loading = false
            return users
        } catch (error) {
            this.loading = false
            console.log(error)
        }
       }
    }

})