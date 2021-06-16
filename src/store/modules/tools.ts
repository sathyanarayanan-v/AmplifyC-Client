import { toolsApi } from './../../api/modules/tools'
import { ICommit } from '@/interfaces/common.interface'
import { IToolsState, ICompanyMasterDataForTools, IMcaFilingsToolsResponse } from '@/interfaces/store/tools'

const state: IToolsState = {
  mca: { masterData: null, filings: [] }
}
const mutations = {
  setCompanyMasterData(state: IToolsState, masterData: ICompanyMasterDataForTools) {
    state.mca.masterData = masterData
  },
  setMcaFilings(state: IToolsState, res: IMcaFilingsToolsResponse) {
    state.mca.filings = res.filings
  }
}
const actions = {
  async getMcaMasterData({ commit }: ICommit, incorporation_number: string) {
    try {
      const masterData = await toolsApi.mca.getMasterData(incorporation_number)
      commit('setCompanyMasterData', masterData)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getMcaFilings({ commit }: ICommit, incorporation_number: string) {
    try {
      const mcaFilings = await toolsApi.mca.getFilings(incorporation_number)
      commit('setMcaFilings', mcaFilings)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default {
  actions,
  state,
  mutations
}
