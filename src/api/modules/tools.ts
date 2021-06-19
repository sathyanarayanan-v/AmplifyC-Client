import axiosInstance from '@/api/axios'
import { ISearchTaxpayerByPAN } from '@/interfaces/store/gst'
import { ICompanyMasterDataForTools, IMcaFilingsToolsResponse } from '@/interfaces/store/tools'
export const TOOLS_ROOT = 'tools'

const GET_COMPANY_MASTER_DATA = `${TOOLS_ROOT}/mca/master-data`
const GET_MCA_FILINGS = `${TOOLS_ROOT}/mca/filings`
const GET_GST_MASTER_DATA = `${TOOLS_ROOT}/gst/searchtp/pan`
const GET_GST_FILINGS = `${TOOLS_ROOT}/gst/filings`

export const toolsApi = {
  mca: {
    getMasterData: (incorporation_number: string): Promise<ICompanyMasterDataForTools> =>
      axiosInstance.post(GET_COMPANY_MASTER_DATA, { incorporation_number }),
    getFilings: (incorporation_number: string): Promise<IMcaFilingsToolsResponse> =>
      axiosInstance.post(GET_MCA_FILINGS, { incorporation_number })
  },
  gst: {
    searchTpByPan: (reqBody: ISearchTaxpayerByPAN) => axiosInstance.post(GET_GST_MASTER_DATA, reqBody),
    getGstFilings: (gstin: string) => axiosInstance.post(GET_GST_FILINGS, { gstin })
  }
}
