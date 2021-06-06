import axiosInstance from '@/api/axios'
import { USER_ROOT } from './user'

const COMPANY_ROOT = 'companies'

export const companyApi = {
  getCompaniesForUser: (id: string) => axiosInstance.get(`${USER_ROOT}/${id}/companies`),
  findOne: (id: string) => axiosInstance.get(`${COMPANY_ROOT}/${id}`)
}
