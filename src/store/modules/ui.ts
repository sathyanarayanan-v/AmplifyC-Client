import { IUIState } from '@/interfaces/store/ui'
import { ICommit } from './../../interfaces/common.interface'
const mutations = {
  toggleDrawer(state: IUIState, drawer: boolean) {
    state.drawer = drawer
  },
  toggleNotificationPanel(state: IUIState, notificationPanel: boolean) {
    state.notificationPanel = notificationPanel
  }
}
const actions = {
  toggleDrawer({ commit }: ICommit, drawer: boolean) {
    commit('toggleDrawer', drawer)
  },
  toggleNotificationPanel({ commit }: ICommit, notificationPanel: boolean) {
    commit('toggleNotificationPanel', notificationPanel)
  }
}
const state: IUIState = {
  drawer: false,
  notificationPanel: false
}

export default {
  actions,
  mutations,
  state
}
