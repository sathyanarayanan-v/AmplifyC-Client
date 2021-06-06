<template>
  <v-row class="mt-4">
    <current-company-header :company="selectedCompany" :companyName="getCompanyName" />
    <v-col v-for="(item, idx) in complianceList" :key="idx" cols="12" xl="4" lg="4" md="4" sm="4">
      <compliance-card :currentCompliance="item" />
    </v-col>
    <compliant-details />
    <non-compliant-details />
  </v-row>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
import CurrentCompanyHeader from './CurrentCompanyHeader.vue'
import ComplianceCard from './ComplianceOverviewCard.vue'
import CompliantDetails from './CompliantDetails.vue'
import NonCompliantDetails from './NonCompliantDetails.vue'
import { ICompany } from '../interfaces/store/company'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'
@Component<CurrentCompany>({
  components: {
    'current-company-header': CurrentCompanyHeader,
    'compliance-card': ComplianceCard,
    'compliant-details': CompliantDetails,
    'non-compliant-details': NonCompliantDetails
  },
  async created() {
    const { id } = this.$route.params
    await this.$store.dispatch('findCompanyById', id)
  },
  computed: {
    ...mapState({
      selectedCompany: state => (state as IRootState).company.selectedCompany
    })
  }
})
export default class CurrentCompany extends VueStrong {
  selectedCompany?: ICompany

  complianceList = [
    { name: 'Ministry of Corporate Affairs', icon: 'mdi-alpha-m-circle' },
    { name: 'Goods and Services Tax', icon: 'mdi-alpha-g-circle' },
    { name: 'Income Tax Returns', icon: 'mdi-alpha-i-circle' }
  ]
  get getCompanyName(): string {
    if (this.selectedCompany) {
      const companyName = this.selectedCompany.company_name
        .toLowerCase()
        .replace('llp', 'LLP')
        .replace('private', 'PVT')
        .replace('limited', 'Ltd.')
      return companyName
        .split(' ')
        .map(name => name[0].toUpperCase() + name.substring(1))
        .join(' ')
    }
    return ''
  }
}
</script>
