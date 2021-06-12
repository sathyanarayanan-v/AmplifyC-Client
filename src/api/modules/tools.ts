import axiosInstance from '@/api/axios'
import { ICompanyMasterDataForTools, IMcaFilingsToolsResponse } from '@/interfaces/store/tools'
export const TOOLS_ROOT = 'tools'

const GET_COMPANY_MASTER_DATA = `${TOOLS_ROOT}/mca/master-data`
const GET_MCA_FILINGS = `${TOOLS_ROOT}/mca/filings`

export const toolsApi = {
  mca: {
    getMasterData: (incorporation_number: string): Promise<ICompanyMasterDataForTools> =>
      axiosInstance.post(GET_COMPANY_MASTER_DATA, { incorporation_number }),
    getFilings: (incorporation_number: string): Promise<IMcaFilingsToolsResponse> =>
      axiosInstance.post(GET_MCA_FILINGS, { incorporation_number })
  }
}
