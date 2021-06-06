import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './modules/account'
import NotificationModule from './modules/notification'
import CompanyModule from './modules/company'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: AuthModule,
    company: CompanyModule,
    notification: NotificationModule
  }
})
