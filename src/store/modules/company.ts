import { Company, CompanyState, NameSearchResult } from '@/interfaces/store/company'
import { companyApi } from './../../api/modules/company'
import { ICommit } from './../../interfaces/common.interface'
import store from '@/store'

const mutations = {
  setCompaniesForUser(state: CompanyState, companies: [Company]) {
    state.companies = companies
    state.visibleCompanies = companies
  },
  setCurrentCompany(state: CompanyState, company: Company) {
    state.selectedCompany = company
  },
  setNameSearchResults(state: CompanyState, nameSearchResults: NameSearchResult) {
    state.nameSearchResults = nameSearchResults
  },
  addCompany(state: CompanyState, company: Company) {
    state.companies = [...state.companies, company]
    state.visibleCompanies = state.companies
  },
  sortByName(state: CompanyState) {
    state.visibleCompanies = [...state.companies].sort((a, b) => a.company_name.localeCompare(b.company_name))
  },
  sortByInc(state: CompanyState) {
    state.visibleCompanies = [...state.companies].sort(
      (a, b) => new Date(a.date_of_incorporation).getTime() - new Date(b.date_of_incorporation).getTime()
    )
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
  async createCompany({ commit }: ICommit, newCompany: Partial<Company>) {
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
  },
  sortByInc({ commit }: ICommit) {
    commit('sortByInc')
  },
  sortByName({ commit }: ICommit) {
    commit('sortByName')
  }
}
const state: CompanyState = {
  companies: [],
  visibleCompanies: [],
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
