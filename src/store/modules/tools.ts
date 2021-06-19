import { ISearchTaxpayerByPAN } from './../../interfaces/store/gst'
import { toolsApi } from './../../api/modules/tools'
import { ICommit } from '@/interfaces/common.interface'
import {
  IToolsState,
  ICompanyMasterDataForTools,
  IMcaFilingsToolsResponse,
  GSTMasterData,
  GSTResList,
  GSTFiling
} from '@/interfaces/store/tools'

const state: IToolsState = {
  mca: { masterData: null, filings: [] },
  gst: { masterData: null, filings: [], gstResults: [] }
}
const mutations = {
  setCompanyMasterData(state: IToolsState, masterData: ICompanyMasterDataForTools) {
    state.mca.masterData = masterData
  },
  setMcaFilings(state: IToolsState, res: IMcaFilingsToolsResponse) {
    state.mca.filings = res.filings
  },
  setGstMasterData(state: IToolsState, res: GSTMasterData) {
    state.gst.masterData = res
  },
  setGstSearchResults(state: IToolsState, res: Array<GSTResList>) {
    state.gst.gstResults = res
  },
  setGstFilings(state: IToolsState, res: Array<GSTFiling>) {
    state.gst.filings = res
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
  },
  async getGstByPan({ commit }: ICommit, reqBody: ISearchTaxpayerByPAN) {
    try {
      const gstSearchResults = await toolsApi.gst.searchTpByPan(reqBody)
      commit('setGstSearchResults', gstSearchResults)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getGstFilings({ commit }: ICommit, gstin: string) {
    try {
      const filings = await toolsApi.gst.getGstFilings(gstin)
      commit('setGstFilings', filings)
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
