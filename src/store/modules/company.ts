import { ICompany, ICompanyState, INameSearchResult } from '@/interfaces/store/company'
import { companyApi } from './../../api/modules/company'
import { ICommit } from './../../interfaces/common.interface'
import store from '@/store'
const mutations = {
  setCompaniesForUser(state: ICompanyState, companies: [ICompany]) {
    state.companies = companies
  },
  setCurrentCompany(state: ICompanyState, company: ICompany) {
    state.selectedCompany = company
  },
  setNameSearchResults(state: ICompanyState, nameSearchResults: INameSearchResult) {
    state.nameSearchResults = nameSearchResults
  },
  addCompany(state: ICompanyState, company: ICompany) {
    state.companies = [...state.companies, company]
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
  },
  async findCompanyById({ commit }: ICommit, id: string) {
    try {
      const currentCompany = await companyApi.findOne(id)
      commit('setCurrentCompany', currentCompany)
    } catch (error) {
      // log error
    }
  },
  async searchCompaniesInMca({ commit }: ICommit, name: string) {
    try {
      const nameSearchResults = await companyApi.searchCompaniesInMcaByName(name)
      commit('setNameSearchResults', nameSearchResults)
    } catch (error) {
      // log error
    }
  },
  async createCompany({ commit }: ICommit, newCompany: Partial<ICompany>) {
    try {
      const company = await companyApi.create(newCompany)
      commit('addCompany', company)
      commit('setCurrentCompany', company)
      store.dispatch('createNotification', {
        group: 'notification',
        title: 'Your company is successfully created',
        time: Date.now().toString(),
        data: {
          color: 'success',
          icon: 'mdi-check-decagram'
        }
      })
    } catch (error) {
      // log error
    }
  }
}
const state: ICompanyState = {
  companies: [],
  selectedCompany: null,
  nameSearchResults: {
    errors: [],
    companies: [],
    success: null
  }
}

export default {
  actions,
  mutations,
  state
}
