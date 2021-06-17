import { ICaptcha, ISearchTaxpayerByPAN } from './../../interfaces/store/gst'
import axiosInstance from '@/api/axios'
export const GST_ROOT = 'gst'

export const gstApi = {
  getCaptcha: (): Promise<ICaptcha> => axiosInstance.get(`${GST_ROOT}/captcha`)
}
