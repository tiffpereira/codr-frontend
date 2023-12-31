import Axios from 'axios'

let BASE_URL = process.env.NODE_ENV === 'local' ? 'https://localhost:3001' : 'https://codr-backend-production-6f86.up.railway.app'

const Client = Axios.create({ baseURL: BASE_URL })


Client.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')
      if (token) {
          config.headers['authorization'] = `Bearer ${token}`
      }
      return config 
    },
    (error) => Promise.reject(error)
  )


export default Client