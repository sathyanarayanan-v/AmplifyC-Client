import { IToolsState } from '@/interfaces/store/tools'
import { CompanyState } from './company'
import { IAuthState } from './account'
import { INotificationState } from './notification'
import { IGstState } from './gst'
import { IAffiliateState } from './affiliate'
import { IUserState } from './user'

export interface IRootState {
  auth: IAuthState
  notification: INotificationState
  company: CompanyState
  gst: IGstState
  affiliate: IAffiliateState
  tools: IToolsState
  user: IUserState
}
