import Vue, { VueConstructor } from 'vue'
import { Store } from 'vuex'
import { IRootState } from '@/interfaces/store/root'
import { NotificationOptions } from 'vue-notification'
import { VueRouter } from 'vue-router/types/router'

abstract class VueStrongClass extends Vue {
  public $store!: Store<IRootState>
  public $notify!: (options: NotificationOptions | string) => void
  $router: VueRouter
}
export const VueStrong = Vue as VueConstructor<VueStrongClass>
