<template>
  <v-dialog
    v-model="dialog"
    width="900"
    :fullscreen="fullscreen"
    scrollable
    persistent
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-on="on" v-bind="attrs" class="mb-0 text-capitalize bg-primary white--text" block>
        <v-icon class="mr-2">mdi-plus-circle-outline</v-icon>
        <h4>Add Company</h4>
      </v-btn>
    </template>
    <v-card class="bg-lightWHite">
      <v-card-title class="bg-white justify-space-between elevation-2 pa-3">
        <div class="d-flex">
          <v-img
            alt="Vuetify Logo"
            max-height="63"
            max-width="120"
            src="../assets/logo.png"
            transition="scale-transition"
          />
        </div>
        <h4 class="my-auto mr-7">Create Company</h4>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="closeDialog"
              icon
              class="bg-error"
              style="border-radius:50% !important"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="#fff">mdi-close</v-icon>
            </v-btn>
          </template>
          <span>Close</span>
        </v-tooltip>
      </v-card-title>
      <v-card-text class="pt-5 ">
        <v-form v-model="valid">
          <v-row>
            <v-col cols="12" sm="12" lg="6" xl="6" md="12" xs="12">
              <h4 class="font-weight-black mb-2">Company name</h4>
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
                label="Company name (atleast 3 characters)"
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
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="12" lg="6" xl="6" md="12" xs="12">
              <h4 class="font-weight-black mb-2 ">PAN Number</h4>
              <v-text-field
                v-model="pan"
                solo
                placeholder="Enter pan number"
                :rules="panRules"
                @input="onPanInput"
              ></v-text-field>
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
import { validPan } from '../utils'
@Component<AddCompany>({
  computed: {
    ...mapState({
      companies: state => (state as IRootState).company.nameSearchResults.companies || []
    }),
    fullscreen() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return true
        case 'sm':
          return true
        case 'md':
          return true
        case 'lg':
          return false
        case 'xl':
          return false
      }
    }
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
  pan = ''
  panRules = [
    (value: string) => {
      if (value) return validPan(value) ? true : 'Invalid PAN'
      return 'PAN is required'
    }
  ]

  // Methods
  change(companyNameWithCin: string) {
    this.companyName = companyNameWithCin.split(' — ')[0]
    this.incorporationNumber = companyNameWithCin.split(' — ')[1]
  }
  getCompanyName(company: { companyName: string; companyID: string }) {
    return company.companyName + ' — ' + company.companyID
  }
  closeDialog() {
    this.dialog = false
  }
  onPanInput(pan: string) {
    this.pan = pan.toUpperCase()
  }

  // Watch Variables
  @Watch('search')
  async onSearchStringChange(newValue: string, oldVal: string) {
    this.loading = true
    if (newValue && !newValue.includes(' — ') && newValue !== oldVal && newValue.length >= 3) {
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
