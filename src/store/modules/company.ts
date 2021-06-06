import { ICompany, ICompanyState } from '@/interfaces/store/company'
import { companyApi } from './../../api/modules/company'
import { ICommit } from './../../interfaces/common.interface'
const mutations = {
  setCompaniesForUser(state: ICompanyState, companies: [ICompany]) {
    state.companies = companies
  }
}
const actions = {
  async getClientsForUser({ commit }: ICommit, id: string) {
    try {
      const companies = await companyApi.getCompaniesForUser(id)
      commit('setCompaniesForUser', companies)
    } catch (error) {
      // log error
    }
  }
}
const state: ICompanyState = {
  companies: [],
  selectedCompany: null
}

export default {
  actions,
  mutations,
  state
}
