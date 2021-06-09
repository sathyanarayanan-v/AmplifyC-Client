import { ICommit } from '@/interfaces/common.interface'
import { IRootState } from '@/interfaces/store/root'
import { AxiosResponse } from 'axios'
import { ICaptcha, IGst, IGstState } from '@/interfaces/store/gst'
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
    } catch (error) {
      console.log(error)
      // log error
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
