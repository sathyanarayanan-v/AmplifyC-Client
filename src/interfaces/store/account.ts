import { IUser } from './user'

export interface IAuthState {
  currentUser: IUser
  fpEmail: string
  fpCode: string
}
