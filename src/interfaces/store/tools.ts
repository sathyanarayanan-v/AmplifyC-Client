export interface IDirectorDetails {
  begin_date: string
  'din/pan': string
  end_date: string
  name: string
}
export interface ICharges {
  assets_under_charge: string
  charge_amount: 5000000
  date_of_creation: string
  date_of_modification: string
  status: string
}
export interface MCAFilings {
  documentId?: string
  dof: string
  form: string
  srn: string
}
export interface IMcaFilingsToolsResponse {
  filings: Array<MCAFilings>
}
export interface ICompanyMasterDataForTools {
  authorized_capital: number
  category: string
  charges: ICharges
  class_of_company: string
  company_name: string
  date_of_agm: string
  date_of_bs: string
  date_of_incorporation: string
  directors: Array<IDirectorDetails>
  paid_capital: number
  email: string
  filing_status: string
  incorporation_number: string
  listed: string
  number_of_members: string
  registered_office_address: string
  registration_number: string
  roc: string
  sub_category: string
}

export interface GSTFiling {
  fy: string
  taxp: string
  mof: string
  dof: string
  rtnType: string
  arn: string
}

export interface GSTMasterData {
  ntcrbs: string
  adhrVFlag: string
  lgnm: string
  stj: string
  dty: string
  cxdt: string
  gstin: string
  nba: Array<string>
  ekycVFlag: string
  cmpRt: string
  rgdt: string
  ctb: string
  pradr: {
    adr: string
  }
  sts: string
  tradeNam: string
  isFieldVisitConducted: string
  ctj: string
}

export interface GSTResList {
  gstin: string
  authStatus: string
  stateCd: string
}
export interface IToolsState {
  mca: {
    masterData: ICompanyMasterDataForTools
    filings: Array<MCAFilings>
  }
  gst: {
    masterData: GSTMasterData
    filings: Array<GSTFiling>
    gstResults: Array<GSTResList>
  }
}
