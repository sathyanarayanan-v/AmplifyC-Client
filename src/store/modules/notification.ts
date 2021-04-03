import { ICommit, INotification } from '@/interfaces/common.interface'
import { INotificationState } from '@/interfaces/store/notification'
const mutations = {
  setNewNotification(state: INotificationState, notification: INotification) {
    state.notifications.unshift(notification)
  },
  readNotification(state: INotificationState, notification: INotification) {
    const oldNotifications = state.notifications.filter(
      existingNotification => existingNotification.time !== notification.time
    )
    state.notifications = oldNotifications
  },
  createNotification(state: INotificationState) {
    state.notifications = []
  }
}
const actions = {
  createNotification({ commit }: ICommit, notification: INotification) {
    commit('setNewNotification', notification)
  },
  readNotification({ commit }: ICommit, time: string) {
    commit('readNotification', time)
  }
}
const state: INotificationState = {
  notifications: []
}

export default {
  actions,
  mutations,
  state
}
