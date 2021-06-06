import { ILoginRequestDto, ILoginResponseDto } from '@/interfaces/auth.interface'
import { ICommit } from '@/interfaces/common.interface'
import { IAuthState } from '@/interfaces/store/account'
import { myAccountAPI } from '@/api'
import axiosInstance from '@/api/axios'
import { IUser } from '@/interfaces/store/user'
import router from '@/router'
import store from '@/store'
function loginSuccess() {
  router.push({ name: 'amplifyc-companies' })
  store.dispatch('createNotification', {
    group: 'notification',
    title: 'You have successfully logged in',
    text: '',
    time: Date.now().toString(),
    data: {
      color: 'success',
      icon: 'mdi-check-decagram'
    }
  })
}
const mutations = {
  setCurrentUser(state: IAuthState, currentUser: IUser) {
    state.currentUser = currentUser
  },
  setFpEmail(state: IAuthState, email: string) {
    state.fpEmail = email
  },
  setFpCode(state: IAuthState, code: string) {
    state.fpCode = code
  }
}
const actions = {
  async login({ commit }: ICommit, loginDto: ILoginRequestDto) {
    try {
      const loginResponse: ILoginResponseDto = await axiosInstance.post(myAccountAPI.login(), loginDto)
      const { username } = loginResponse
      localStorage.setItem('token', loginResponse.token)
      commit('setCurrentUser', { username })
      loginSuccess()
    } catch (error) {
      return error
    }
  },
  async getCurrentUser({ commit }: ICommit) {
    const currentUser: Partial<IUser> = await axiosInstance.get(myAccountAPI.getCurrentUser())
    commit('setCurrentUser', currentUser)
  },
  async sendForgotPasswordCode({ commit }: ICommit, email: string) {
    try {
      const res = await axiosInstance.post(myAccountAPI.fpCodeGen(email))
      commit('setFpEmail', email)
      router.push({ name: 'amplifyc-my-account-forgot-password-validate-code' })
      store.dispatch('createNotification', {
        group: 'notification',
        title: 'Email sent to ' + email + '. Kindly check your inbox.',
        text: '',
        time: Date.now().toString(),
        data: {
          color: 'success',
          icon: 'mdi-check-decagram'
        }
      })
    } catch (err) {
      return err
    }
  },
  validateFpCode({ commit }: ICommit, data: { email: string; code: string }) {
    return axiosInstance.post(myAccountAPI.validateFpCode(), data)
  },
  resetPassword(
    { commit }: ICommit,
    data: {
      password: string
      confirmPassword: string
      email: string
      code: string
    }
  ) {
    return axiosInstance.post(myAccountAPI.resetPassword, data)
  },
  setFpCode({ commit }: ICommit, code: string) {
    commit('setFpCode', code)
  }
}
const state: IAuthState = {
  currentUser: null,
  fpEmail: '',
  fpCode: ''
}
export default {
  actions,
  mutations,
  state
}
