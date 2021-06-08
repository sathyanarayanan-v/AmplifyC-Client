<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-on="on" v-bind="attrs" class="mb-0 text-capitalize bg-primary white--text" block>
        <v-icon class="mr-2">mdi-plus-circle-outline</v-icon>
        <h4>Add Company</h4>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="bg-lightBlue">Add Company</v-card-title>
      <v-card-text class="pt-5">
        <v-form v-model="valid">
          <v-row>
            <v-col sm="12" lg="6" xl="6" md="6">
              <v-autocomplete
                v-model="company"
                :loading="loading"
                :items="companies"
                :search-input.sync="search"
                cache-items
                class=""
                @change="change"
                :item-text="getCompanyName"
                item-value="companyId"
                label="Search for your companies*"
                outlined
                :rules="[
                  value => {
                    if (!!value) {
                      return true
                    } else {
                      return 'Please select a company'
                    }
                  }
                ]"
              ></v-autocomplete>
            </v-col>
            <v-col sm="12" lg="6" xl="6" md="6">
              <v-text-field solo></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { VueStrong } from '../typedVue'
import { Component, Watch } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'

@Component<AddCompany>({
  computed: {
    ...mapState({
      companies: state => (state as IRootState).company.nameSearchResults.companies || []
    })
  }
})
export default class AddCompany extends VueStrong {
  // Data variables
  dialog = false
  valid = false
  loading = false
  companyName = ''
  incorporationNumber = ''
  search = ''
  company = null

  // Methods
  change(companyNameWithCin: string) {
    this.companyName = companyNameWithCin.split(' — ')[0]
    this.incorporationNumber = companyNameWithCin.split(' — ')[1]
  }
  getCompanyName(company: { companyName: string; companyID: string }) {
    return company.companyName + ' — ' + company.companyID
  }

  // Watch Variables
  @Watch('search')
  async onSearchStringChange(newValue: string, oldVal: string) {
    this.loading = true
    if (newValue && !newValue.includes(' — ') && newValue !== oldVal) {
      try {
        await this.$store.dispatch('searchCompaniesInMca', newValue)
      } catch (err) {
        console.error('Error while searching for company')
      }
    }
    this.loading = false
  }
}
</script>
<style></style>
