import { IAuthState } from '@/interfaces/store/auth'

const actions = {}
const mutations = {}
const state: IAuthState = {
  currentUser: {
    password: '',
    userId: '',
    username: ''
  }
}
export default {
  actions,
  mutations,
  state
}
