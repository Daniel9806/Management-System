import { defineStore } from 'pinia'
import mainApi from '../api/mainApi'
import { useAlert } from '../composables/useAlert'

const { timerToast } = useAlert()

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
                timerToast.fire({
                    icon: 'error',
                    text: `${error.message}`
                })
            }
        },

        async createUser(user) {
            this.loadingCreating = true
            try {
                const { data } = await mainApi.post('/users', user)
                console.log(data)
                if (data.message == "validation.unique") {
                    console.log('error de validacion')
                    this.loadingCreating = false
                    timerToast.fire({
                        icon: 'error',
                        text: `${data.message}`
                    })
                } else {
                    const newUser = JSON.parse(data.data)
                    console.log(newUser)
                    this.loadingCreating = false
                    timerToast.fire({
                        icon: 'success',
                        text: 'Usuario registrdo'
                    })
                    return newUser
                }
            } catch (error) {
                this.loadingCreating = false
                console.log(error)
                timerToast.fire({
                    icon: 'error',
                    text: `${error.message}`
                })
            }
        }
    }

})