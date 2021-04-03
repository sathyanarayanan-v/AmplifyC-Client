import { ILoginRequestDto, ILoginResponseDto } from '@/interfaces/auth.interface'
import { ICommit } from '@/interfaces/common.interface'
import { IAuthState } from '@/interfaces/store/account'
import { myAccountAPI } from '@/api'
import axiosInstance from '@/api/axios'
import { IUser } from '@/interfaces/store/user'

const mutations = {
  setCurrentUser(state: IAuthState, currentUser: IUser) {
    state.currentUser = currentUser
  }
}
const actions = {
  async login({ commit }: ICommit, loginDto: ILoginRequestDto) {
    const loginResponse: ILoginResponseDto = await axiosInstance.post(myAccountAPI.login(), loginDto)
    const { username } = loginResponse
    localStorage.setItem('token', loginResponse.token)
    commit('setCurrentUser', { username })
  },
  async getCurrentUser({ commit }: ICommit) {
    const currentUser: Partial<IUser> = await axiosInstance.get(myAccountAPI.getCurrentUser())
    commit('setCurrentUser', currentUser)
  },
  async sendForgotPasswordCode({ commit }: ICommit, email: string) {
    try {
      await axiosInstance.post(myAccountAPI.fpCodeGen(email))
      localStorage.setItem('fpEmail', email)
    } catch (error) {
      //
    }
  },
  async validateFpCode({ commit }: ICommit, data: { email: string; code: string }) {
    await axiosInstance.post(myAccountAPI.validateFpCode(), data)
  }
}
const state: IAuthState = {
  currentUser: null
}
export default {
  actions,
  mutations,
  state
}
