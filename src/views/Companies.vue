<template>
  <div class="mx-4">
    <dashboard-welcome />
    <router-view />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { VueStrong } from '../typedVue'
import DashboardWelcome from '../components/DashboardWelcome.vue'
import { IUser } from '../interfaces/store/user'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'

@Component<Companies>({
  components: {
    'dashboard-welcome': DashboardWelcome
  },
  computed: {
    ...mapState({
      user: state => (state as IRootState).auth.currentUser
    })
  },
  async created() {
    await this.$store.dispatch('getClientsForUser', this.user._id)
  }
})
export default class Companies extends VueStrong {
  user?: IUser
}
</script>

<style></style>
