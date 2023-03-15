import { defineStore } from 'pinia'
import mainApi from '../api/mainApi'

export const useUserStore = defineStore('userStore', {

    state: () => ({
        loadingFetching: false,
        loadingCreating: false
    }),

    getters: {
        getLoadingFetching() {
            return this.loadingFetching
        },

        getLoadingCreating() {
            return this.loadingCreating
        },
    },

    actions: {
        async fetchUsers() {
            this.loadingFetching = true
            try {
                const { data } = await mainApi.get('/users')
                const users = JSON.parse(data.data)
                this.loadingFetching = false
                return users
            } catch (error) {
                this.loadingFetching = false
                console.log(error)
                return error
            }
        },

        async createUser(user) {
            this.loadingCreating = true
            console.log(user)
            try {
                const { data } = await mainApi.post('/users', user)
                const newUser = JSON.parse(data.data)
                console.log(newUser)
                this.loadingCreating = false
            } catch (error) {
                this.loadingCreating = false
                console.log(error)
            }
        }
    }

})