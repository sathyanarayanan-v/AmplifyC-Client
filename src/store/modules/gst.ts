import { ICommit } from '@/interfaces/common.interface'
import { IRootState } from '@/interfaces/store/root'
import { ICaptcha, IGst, IGstState, ISearchTaxpayerByPAN } from '@/interfaces/store/gst'
import { gstApi } from '@/api/modules/gst'
import rootState from '@/store'
const state: IGstState = {
  gst: [],
  captcha: null,
  selectedGst: null
}
const actions = {
  async getCaptcha({ commit }: ICommit) {
    try {
      const gstCaptcha: ICaptcha = await gstApi.getCaptcha()
      const userId = '/' + (rootState.state as IRootState).auth.currentUser._id + '/'
      const image = gstCaptcha.image.replace(userId, '')
      commit('setCaptcha', { image, idToken: gstCaptcha.idToken })
      return true // AddCompany.vue line 245 this is used
    } catch (error) {
      console.log(error)
      return false // AddCompany.vue line 245 this is used
    }
  }
}
const mutations = {
  setCaptcha(state: IGstState, captcha: ICaptcha) {
    state.captcha = captcha
  }
}

export default {
  state,
  actions,
  mutations
}
