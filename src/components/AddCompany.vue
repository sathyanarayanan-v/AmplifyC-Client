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
      <!-- 
        * Add Company header
      -->
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
      <!-- 
        * Add company card with content
       -->
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
          <v-row>
            <v-col cols="12" sm="12" lg="6" xl="6" md="12" xs="12">
              <h4 class="font-weight-black mb-2">Captcha Image</h4>
              <div class="d-flex">
                <v-img :src="`data:image/png;base64,${image}`" max-width="200" max-height="100" class="mr-4"></v-img>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" class="my-auto" @click="getCaptcha"
                      ><v-icon color="#0252cc" v-bind:class="{ 'mdi-spin': isFetchingCaptcha }"
                        >mdi-cached</v-icon
                      ></v-btn
                    >
                  </template>
                  <span>Refresh Captcha</span>
                </v-tooltip>
              </div>
            </v-col>
            <v-col cols="12" sm="12" lg="6" xl="6" md="12" xs="12">
              <h4 class="font-weight-black mb-2">Captcha</h4>
              <v-text-field v-model="captcha" solo placeholder="Enter captcha" :rules="captchaRules"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <!-- Dummy Col -->
            <v-col cols="0" sm="0" lg="3" xl="3" md="0" xs="0"></v-col>
            <v-col cols="12" sm="12" lg="6" xl="6" md="12" xs="12" class="d-flex justify-center">
              <v-btn :disabled="!valid" class="bg-success mr-2 text-capitalize"
                ><v-icon class="mr-2">mdi-check-decagram</v-icon>Sumbit
              </v-btn>
              <v-btn class="bg-error ml-2 text-capitalize" @click="closeDialog"
                ><v-icon class="mr-2">mdi-close-circle-outline</v-icon>Cancel</v-btn
              >
            </v-col>
            <!-- Dummy Col -->
            <v-col cols="0" sm="0" lg="3" xl="3" md="0" xs="0"></v-col>
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
import { IUser } from '../interfaces/store/user'
import { ICompany } from '../interfaces/store/company'
@Component<AddCompany>({
  computed: {
    ...mapState({
      companies: state => (state as IRootState).company.nameSearchResults.companies || [],
      image: state => (state as IRootState).gst.captcha?.image || '',
      idToken: state => (state as IRootState).gst.captcha?.idToken || '',
      user: state => (state as IRootState).auth.currentUser,
      selectedCompany: state => (state as IRootState).company.selectedCompany
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
  // Computed state variables
  companies?: Array<{ companyID: string; companyName: string }>
  image?: string
  idToken?: string
  user?: IUser
  selectedCompany?: ICompany

  // Data variables
  dialog = false
  valid = false
  loading = false
  isFetchingCaptcha = false

  // v-model variables
  company_name = ''
  incorporation_number = ''
  captcha = ''
  pan = ''

  // Auto-complete vatiables
  search = ''
  company: { companyName: string; companyID: string } = null

  // Rules
  panRules = [
    (value: string) => {
      if (value) return validPan(value) ? true : 'Invalid PAN'
      return 'PAN is required'
    }
  ]
  captchaRules = [(value: string) => (value ? true : 'Captcha is required')]

  // Methods
  change(companyNameWithCin: string) {
    this.company_name = companyNameWithCin.split(' — ')[0]
    this.incorporation_number = companyNameWithCin.split(' — ')[1]
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
  async getCaptcha() {
    try {
      this.isFetchingCaptcha = true
      await this.$store.dispatch('getCaptcha')
    } catch (error) {
      // log error
    } finally {
      this.isFetchingCaptcha = false
    }
  }
  async submit() {
    const panSearch = {
      pan: this.pan,
      idToken: this.idToken,
      captcha: this.captcha,
      incorporation_number: this.incorporation_number
    }
    const companyToCreate = {
      incorporation_number: this.incorporation_number,
      company_name: this.company_name
    }
    const affiliateToCreate = {
      user_id: this.user._id,
      company_id: this.selectedCompany._id
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
        console.error('Error while searching for company')
      }
    }
    this.loading = false
  }
  @Watch('dialog')
  onDialogChange(newValue: boolean, oldVal: boolean) {
    if (newValue !== oldVal && newValue === true) {
      this.$store.dispatch('getCaptcha')
    }
  }
}
</script>
<style></style>
