import { ICompanyState } from './company'
import { IAuthState } from './account'
import { INotificationState } from './notification'

export interface IRootState {
  auth: IAuthState
  notification: INotificationState
  company: ICompanyState
}
