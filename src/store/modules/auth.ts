import { IAuthState } from '@/interfaces/store/auth'

const actions = {
  login({ commit }) {
    commit('hello')
  }
}
const mutations = {}
const state: IAuthState = {
  currentUser: null
}
export default {
  actions,
  mutations,
  state
}
