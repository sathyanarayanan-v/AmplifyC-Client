import { IUser } from '@/interfaces/store/user'
import axiosInstance from '../axios'
export const USER_ROOT = 'users'
export const userApi = {
  create: (newUser: IUser) => axiosInstance.post(USER_ROOT, newUser)
}
