import { ICompanyState } from './company'
import { IAuthState } from './account'
import { INotificationState } from './notification'
import { IGstState } from './gst'
import { IAffiliateState } from './affiliate'

export interface IRootState {
  auth: IAuthState
  notification: INotificationState
  company: ICompanyState
  gst: IGstState
  affiliate: IAffiliateState
}
