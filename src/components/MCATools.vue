<template>
  <v-container>
    <v-row class="pa-2">
      <v-col lg="4" xl="4" sm="12" md="12" cols="12">
        <h5 class="primary-text"><v-icon color="#0252cc" class="mr-2 mb-1">mdi-lock</v-icon>Enter required Details</h5>
      </v-col>
      <v-col lg="6" xl="6" sm="12" md="12" cols="12"></v-col>
    </v-row>
    <v-form v-model="valid">
      <v-row>
        <v-col cols="12" lg="6" xl="6" md="6" sm="6">
          <div class="d-flex justify-space-between">
            <v-autocomplete
              v-model="company"
              :loading="loading"
              :items="companies"
              :search-input.sync="search"
              cache-items
              class="width-50 mr-4"
              @change="change"
              :item-text="getCompanyName"
              item-value="companyId"
              label="Company name (Enter atleast 3 characters)"
              solo
              :rules="[
                value => {
                  if (!!value) {
                    return true
                  } else {
                    return 'Please select a company'
                  }
                }
              ]"
              dense
            ></v-autocomplete>
            <v-btn :disabled="!valid" :loading="isSubmitting" @click="submit" class="bg-success mr-2 text-capitalize"
              ><v-icon class="mr-2">mdi-check-decagram</v-icon>Sumbit
            </v-btn>
          </div>
        </v-col>
        <v-col lg="6" xl="6"></v-col>
      </v-row>
      <mca-tools-result v-if="resultsLoaded && !isSubmitting" />
      <mca-tools-result-loader :value="loaderValue" v-if="isSubmitting && !resultsLoaded" />
      <tools-awaiting-input v-if="!(resultsLoaded && isSubmitting) && initialised" />
    </v-form>
  </v-container>
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'
import { VueStrong } from '../typedVue'
import MCAToolsResult from './MCAToolsResult.vue'
import MCAToolsResultLoader from './MCAToolsResultLoader.vue'
import ToolsAwaitingInput from './ToolsAwaitingInput.vue'
@Component({
  components: {
    'mca-tools-result': MCAToolsResult,
    'mca-tools-result-loader': MCAToolsResultLoader,
    'tools-awaiting-input': ToolsAwaitingInput
  },
  computed: {
    ...mapState({
      companies: state => (state as IRootState).company.nameSearchResults.companies || []
    })
  }
})
export default class MCATool extends VueStrong {
  valid = true
  isSubmitting = false
  loading = false
  resultsLoaded = false
  loaderValue = 0
  initialised = true
  // Auto-complete vatiables
  companyName = ''
  incorporationNumber = ''
  search = ''
  company: { companyName: string; companyID: string } = null

  // Methods
  change(companyNameWithCin: string) {
    this.companyName = companyNameWithCin.split(' — ')[0]
    this.incorporationNumber = companyNameWithCin.split(' — ')[1]
  }
  getCompanyName(company: { companyName: string; companyID: string }) {
    return company.companyName + ' — ' + company.companyID
  }
  async submit() {
    try {
      const incorporationNumber = this.incorporationNumber

      // Initialise all variables to show loader
      this.loaderValue = 0
      this.isSubmitting = true
      this.resultsLoaded = false
      this.initialised = false

      await this.$store.dispatch('getMcaMasterData', incorporationNumber)
      this.loaderValue = 50

      await this.$store.dispatch('getMcaFilings', incorporationNumber)
      this.loaderValue = 100
    } catch (error) {
      console.log(error)
    } finally {
      // Alter variables to show results
      setTimeout(() => {
        this.resultsLoaded = true
        this.isSubmitting = false
      }, 1000)
    }
  }

  // Watch Variables
  @Watch('search')
  async onSearchStringChange(newValue: string, oldVal: string) {
    this.loading = true
    if (newValue && !newValue.includes(' — ') && newValue !== oldVal && newValue.length >= 3) {
      try {
        await this.$store.dispatch('searchCompaniesInMca', newValue)
      } catch (err) {
        // handle error
      }
    }
    this.loading = false
  }
}
</script>
