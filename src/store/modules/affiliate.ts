import { affilateApi } from './../../api/modules/affiliate'
import { ICommit } from '@/interfaces/common.interface'
import { IAffiliate, IAffiliateState } from '@/interfaces/store/affiliate'

const mutations = {
  setAffiliates(state: IAffiliateState, affiliates: Array<IAffiliate>) {
    state.affiliates = affiliates
  },
  addNewAffiliate(state: IAffiliateState, newAffiliate: IAffiliate) {
    state.affiliates = [...state.affiliates, newAffiliate]
  },
  setSelectedAffiliate(state: IAffiliateState, affiliate: IAffiliate) {
    state.selectedAffiliate = affiliate
  }
}
const actions = {
  async createAffiliate({ commit }: ICommit, newAffiliate: IAffiliate) {
    try {
      const affiliate = await affilateApi.createAffiliate(newAffiliate)
      commit('addNewAffiliate', affiliate)
    } catch (error) {
      // log error
    }
  },
  setSelectedAffiliate({ commit }: ICommit, affiliate: IAffiliate) {
    commit('setSelectedAffiliate', affiliate)
  },
  async getAllAffiliates({ commit }: ICommit) {
    try {
      const affiliates = await affilateApi.getAffiliates()
      commit('setAffiliates', affiliates)
    } catch (error) {
      // log error
    }
  }
}
const state: IAffiliateState = {
  affiliates: [],
  selectedAffiliate: null
}

export default {
  actions,
  mutations,
  state
}
