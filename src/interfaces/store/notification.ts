import { INotification } from '../common.interface'

export interface INotificationState {
  persistingNotifications: Array<INotification>
  notifications: Array<INotification>
}
