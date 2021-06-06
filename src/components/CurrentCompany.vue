<template>
  <v-row class="mt-4">
    <current-company-header />
    <v-col v-for="(item, idx) in [1, 2, 3]" :key="idx" cols="12" xl="4" lg="4" md="4" sm="4">
      <compliance-card />
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
@Component({
  components: {
    'current-company-header': CurrentCompanyHeader,
    'compliance-card': ComplianceCard,
    'compliant-details': CompliantDetails,
    'non-compliant-details': NonCompliantDetails
  }
})
export default class CurrentCompany extends VueStrong {}
</script>
