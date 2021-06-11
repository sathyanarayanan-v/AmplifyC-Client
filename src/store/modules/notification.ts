import { ICommit, INotification } from '@/interfaces/common.interface'
import { INotificationState } from '@/interfaces/store/notification'
import * as uuid from 'uuid'
const mutations = {
  setNewNotification(state: INotificationState, notification: INotification) {
    state.notifications.unshift(notification)
  },
  readNotification(state: INotificationState, id: string) {
    const oldNotifications = state.persistingNotifications.filter(
      existingNotification => existingNotification.id !== id
    )
    state.persistingNotifications = oldNotifications
  },
  createNotification(state: INotificationState) {
    state.notifications = []
  },
  moveToNotificationTray(state: INotificationState, id: string) {
    const notification = state.notifications.find(notification => notification.id === id)
    if (!state.persistingNotifications.find(notification => notification.id === id)) {
      const persistentNotifications = [...state.persistingNotifications]
      persistentNotifications.push(notification)
      state.persistingNotifications = persistentNotifications
    }
  },
  readAllNotification(state: INotificationState) {
    state.persistingNotifications = []
  }
}
const actions = {
  createNotification({ commit }: ICommit, notification: INotification) {
    notification.id = uuid.v4()
    commit('setNewNotification', notification)
  },
  moveToNotificationTray({ commit }: ICommit, id: string) {
    commit('moveToNotificationTray', id)
  },
  readNotification({ commit }: ICommit, id: string) {
    commit('readNotification', id)
  },
  readAllNotifications({ commit }: ICommit) {
    commit('readAllNotification')
  }
}
const state: INotificationState = {
  persistingNotifications: [],
  notifications: []
}

export default {
  actions,
  mutations,
  state
}
