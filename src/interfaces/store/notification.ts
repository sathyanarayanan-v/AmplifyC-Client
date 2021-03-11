import { INotification } from '../common.interface'

export interface INotificationState {
  newNotification: Array<INotification>
  notifications: Array<INotification>
}
