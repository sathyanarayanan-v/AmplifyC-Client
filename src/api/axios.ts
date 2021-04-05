import axios, { AxiosResponse } from 'axios'
const baseURL = process.env.VUE_APP_API_ENDPOINT
const axiosInstance = axios.create({ baseURL })
const UNAUTHORIZED = 401
import router from '@/router'
import store from '@/store'
const responseHandler = (res: AxiosResponse): Promise<any> => {
  return res.data
}
const errorHandler = (err: any) => {
  if (err.status === UNAUTHORIZED) {
    router.push({ name: 'amplifyc-my-account-login' })
  }
  if (typeof err.response.data === 'string') {
    store.dispatch('createNotification', {
      group: 'notification',
      title: err.response.data || 'Please try again later',
      time: Date.now().toString(),
      data: {
        color: 'error',
        icon: 'mdi-alert-decagram'
      }
    })
    return Promise.reject(err.response.data)
  }
  store.dispatch('createNotification', {
    group: 'notification',
    title: err.response.data.payload || 'Please try again later',
    time: Date.now().toString(),
    data: {
      color: 'error',
      icon: 'mdi-alert-decagram'
    }
  })
  return Promise.reject(err.response.data)
}
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers['Authorization'] = `Bearer ${token}`
  return config
})
axiosInstance.interceptors.response.use(
  res => responseHandler(res),
  err => errorHandler(err)
)

export default axiosInstance
