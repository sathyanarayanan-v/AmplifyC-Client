export interface IGst {
  gstin: string
  incorporation_number: string
  legal_name: string
  trade_name: string
  date_of_reg: string
  constitution_of_business: string
  gstin_status: string
  taxpayer_type: string
  ppob: string
}
export interface ICaptcha {
  image: string
  idToken: string
}
export interface IGstState {
  gst: Array<IGst>
  selectedGst: IGst
  captcha: ICaptcha
}
