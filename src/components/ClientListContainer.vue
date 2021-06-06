<template>
  <v-row class="mt-4">
    <client-list-header />
    <client-list v-for="(company, idx) in companies" :key="idx" :company="company" />
  </v-row>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
import ClientListHeader from './ClientListHeader.vue'
import ClientList from './ClientList.vue'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'
import { IUser } from '../interfaces/store/user'
import { ICompany } from '../interfaces/store/company'
@Component<ClientListContainer>({
  components: {
    'client-list-header': ClientListHeader,
    'client-list': ClientList
  },
  computed: {
    ...mapState({
      user: state => (state as IRootState).auth.currentUser,
      companies: state => (state as IRootState).company.companies
    })
  },
  async created() {
    await this.$store.dispatch('getClientsForUser', this.user._id)
  }
})
export default class ClientListContainer extends VueStrong {
  user?: IUser
  companies?: Array<ICompany>
}
</script>
