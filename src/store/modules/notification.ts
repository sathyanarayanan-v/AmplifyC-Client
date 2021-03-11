import { ICommit, INotification } from '@/interfaces/common.interface'
import { INotificationState } from '@/interfaces/store/notification'
const mutations = {
  setNewNotification(state: INotificationState, notification: INotification) {
    state.newNotification.push(notification)
  },
  clearNewNotification(state: INotificationState, notification: INotification) {
    const newNotification = state.newNotification.filter(
      existingNotification => existingNotification.time !== notification.time
    )
    state.newNotification = newNotification
  },
  createNotification(state: INotificationState, notification: INotification) {
    state.notifications.push(notification)
  },
  readNotification(state: INotificationState, time: string) {
    const unreadNotifications = state.notifications.filter(notification => notification.time !== time)
    state.notifications = unreadNotifications
  }
}
const actions = {
  createNotification({ commit }: ICommit, notification: INotification) {
    commit('setNewNotification', notification)
    setTimeout(() => commit('clearNewNotification', notification), 5000)
    commit('createNotification', notification)
  },
  readNotification({ commit }: ICommit, time: string) {
    commit('readNotification', time)
  }
}
const state: INotificationState = {
  newNotification: [],
  notifications: []
}

export default {
  actions,
  mutations,
  state
}
