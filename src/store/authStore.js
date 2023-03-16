import { defineStore } from 'pinia'
import mainApi from '../api/mainApi'
import { useAlert } from '../composables/useAlert'
// import { useRouter } from 'vue-router'

// const router = useRouter()
const { timerToast } = useAlert()

export const useAuthStore = defineStore('authStore', {

    state: () => ({
        userAuth: null,
        token: null,
        loading: false,
    }),

    getters: {
        getUserAuth() {
            return this.userAuth
        },
        getLoadingAuth() {
            return this.loading
        }
    },

    actions: {
        async fetchUserAuth() {
            try {
                const { data } = await mainApi.get('/auth/user', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + this.token,
                    },
                })
                this.userAuth = data
            } catch (error) {
                console.log(error)
            }
        },

        async login(user) {
            try {
                this.loading = true
                const { data } = await mainApi.post('/auth/login', {
                    username: user.username,
                    password: user.password
                })
                if (data) {
                    this.token = data.message
                    localStorage.setItem('token', data.message)
                    await this.fetchUserAuth()
                    this.loading = false
                    timerToast.fire({
                        icon: 'success',
                        text: 'Logged'
                    })
                    return data
                    // router.push('/dash')
                }

            } catch (error) {
                this.loading = false
                console.log(error)
                timerToast.fire({
                    icon: 'error',
                    text: `${error.message}`
                })
            }
        },

        async refresh() {
            if (!this.token && localStorage.getItem('token')) {
                this.token = localStorage.getItem('token')
            }
            if (!this.userAuth) {
                await this.fetchUserAuth()
            }
            if (!this.token && !localStorage.getItem('token')) {
                window.location.href = '/'
            }
        },

        logout() {
            if (localStorage.getItem('token')) {
                localStorage.removeItem('token')
                timerToast.fire({
                    icon: 'success',
                    text: 'Logged out'
                })
            }
        },
    },

})