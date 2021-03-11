import axios, { AxiosResponse } from 'axios'
const baseURL = process.env.VUE_APP_API_ENDPOINT
const axiosInstance = axios.create({ baseURL })
const UNAUTHORIZED = 401
import router from '@/router'
const responseHandler = (res: AxiosResponse<any>): Promise<any> => {
  if (res.data.error && res.data.error === true) {
    // store.dispatch('SOCKET_newNotification', {
    //   _id: uuidv4().replace('-', ''),
    //   messageMeta: {
    //     notificationType: 'WARNING'
    //   },
    //   message: res.data.message,
    //   local: true
    // })
  }
  return res.data
}
const errorHandler = (err: any) => {
  if (err.status === UNAUTHORIZED) {
    router.push({ name: 'amplifyc-my-account-login' })
  }
  //   store.dispatch('SOCKET_newNotification', {
  //     _id: uuidv4().replace('-', ''),
  //     messageMeta: {
  //       notificationType: 'WARNING'
  //     },
  //     message: err.response.data.payload ? err.response.data.payload : 'Network Error. Please try again later.',
  //     local: true
  //   })
  console.log(typeof err.response.data)
  if (typeof err.response.data === 'string') {
    return Promise.reject(err.response.data)
  }
  return Promise.reject({ ...err.response.data })
}
axiosInstance.interceptors.request.use(config => {
  //   const authService = Vue.prototype.$auth

  //   if (authService.user) {
  //     let account = authService.msalClient.getAccountByHomeId(authService.user.homeAccountId)
  //     let request = {
  //       account,
  //       scopes: [process.env.VUE_APP_SCOPE, process.env.VUE_APP_NOTIFICATION_SCOPE]
  //     }
  //     try {
  //       token = await authService.msalClient.acquireTokenSilent(request)
  //     } catch (err) {
  //       if (err instanceof InteractionRequiredAuthError) {
  //         token = await authService.msalClient.acquireTokenPopup(request)
  //       }
  //     }
  //   }
  const token = localStorage.getItem('token')
  config.headers['Authorization'] = `Bearer ${token}`
  return config
})
axiosInstance.interceptors.response.use(
  res => responseHandler(res),
  err => errorHandler(err)
)

export default axiosInstance
