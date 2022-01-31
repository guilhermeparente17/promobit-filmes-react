import axios from 'axios'

export const baseUrl = "https://api.themoviedb.org/3"
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default api