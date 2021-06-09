export interface ICompany {
  _id: string
  incorporation_number?: string
  company_name: string
  date_of_incorporation?: Date
  state?: string
  roc?: string
  category?: string
  sub_category?: string
  class_of_company?: string
  authorized_capital?: number
  total_contribution: number
  paid_capital?: number
  number_of_members?: string
  activity_description?: string
  registered_office_address?: string
  registration_number?: string
  email?: string
  listed?: boolean
  date_of_agm?: Date
  date_of_bs?: Date
  efiling_status?: string
  director_det?: Array<any>
  signatory_det?: Array<any>
  created_by: any
  type?: string
  createdByModel: string
}

export interface INameSearchResult {
  errors?: Array<{ errorCode: string; errorDescription: string }>
  success: 'false' | 'true'
  companies: Array<{ companyID: string; companyName: string }>
}
export interface ICompanyState {
  companies: Array<ICompany>
  selectedCompany: ICompany
  nameSearchResults: INameSearchResult
}
