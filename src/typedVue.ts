import Vue, { VueConstructor } from 'vue'
import { Store } from 'vuex'
import { IRootState } from '@/interfaces/store/root'
import { NotificationOptions } from 'vue-notification'

abstract class VueStrongClass extends Vue {
  public $store!: Store<IRootState>
  public $notify!: (options: NotificationOptions | string) => void
}
export const VueStrong = Vue as VueConstructor<VueStrongClass>
