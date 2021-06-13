import { userApi } from '@/api'
import { ICommit } from '@/interfaces/common.interface'
import { IUser, IUserState } from '@/interfaces/store/user'

const state: IUserState = {}
const mutations = {}
const actions = {
  createUser({ commit }: ICommit, user: IUser) {
    commit
    return userApi.create(user)
  }
}

export default {
  state,
  actions,
  mutations
}
