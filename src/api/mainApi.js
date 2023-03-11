import axios from 'axios'

const mainApi = axios.create({
    baseURL: 'http://localhost:8000/api',
    //AccesstToken: LocalStorage.token
})

export default mainApi