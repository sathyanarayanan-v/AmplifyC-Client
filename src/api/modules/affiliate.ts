import { IAffiliate } from '@/interfaces/store/affiliate'
import axiosInstance from '../axios'

export const AFFILIATE_ROOT = 'affiliates'

export const affilateApi = {
  createAffiliate: (newAffiliate: IAffiliate) => axiosInstance.post(AFFILIATE_ROOT, newAffiliate),
  getAffiliates: () => axiosInstance.get(AFFILIATE_ROOT)
}
