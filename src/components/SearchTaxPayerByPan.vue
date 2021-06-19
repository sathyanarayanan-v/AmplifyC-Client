<template>
  <v-container>
    <v-form v-model="valid" class="mb-11" ref="gstSearchByPanForm">
      <v-row class="my-4">
        <v-col>
          <v-btn
            @click="$router.push({ name: 'amplifyc-gst-tools-selector' })"
            class="text-capitalize elevation-0 mr-2 my-4  bg-primary menu-btn my-auto"
            height="32"
          >
            <v-icon small class="mr-2">mdi-arrow-left</v-icon>
            Back
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" lg="4" xl="4" md="12" xs="12">
          <h4 class="font-weight-black mb-2">Permanent Account Number <span class="error-text">*</span></h4>
          <v-text-field
            v-model="pan"
            solo
            placeholder="Permanent Account Number (PAN)"
            :rules="panRules"
            @input="onPanInput"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" lg="4" xl="4" md="12" xs="12">
          <h4 class="font-weight-black mb-2">Captcha Image <span class="error-text">*</span></h4>
          <div class="d-flex justify-center">
            <v-img :src="`data:image/png;base64,${image}`" max-width="200" max-height="100" class="mr-4"></v-img>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" class="my-auto" @click="getCaptcha"
                  ><v-icon color="#0252cc" v-bind:class="{ 'mdi-spin': isFetchingCaptcha }">mdi-cached</v-icon></v-btn
                >
              </template>
              <span>Refresh Captcha</span>
            </v-tooltip>
          </div>
        </v-col>
        <v-col cols="12" sm="12" lg="4" xl="4" md="12" xs="12">
          <h4 class="font-weight-black mb-2">Captcha Image <span class="error-text">*</span></h4>

          <v-text-field
            v-model="captcha"
            solo
            placeholder="Enter captcha"
            class="mt-4"
            :rules="captchaRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn class="bg-error text-capitalize mr-2">
          <v-icon class="mr-2">mdi-close-circle-outline</v-icon>Cancel
        </v-btn>
        <v-btn :disabled="!valid" class="bg-success ml-2 text-capitalize" @click.prevent="submit">
          <v-icon class="mr-2">mdi-check-decagram</v-icon>Sumbit
        </v-btn>
      </v-row>
    </v-form>
    <v-row v-if="isResultLoaded" justify="center" class="w-100">
      <v-data-table :headers="headers" :items="gstResults" :options="{ itemsPerPage: 5 }" class="elevation-1">
        <template v-slot:top>
          <v-toolbar class="bg-lightBlue" flat>
            <v-toolbar-title
              ><h4 class="primary-text">
                <v-icon color="#0252cc" class="mr-2 mb-1">mdi-alpha-g-box</v-icon>GST Search Results
              </h4></v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <!-- <v-spacer></v-spacer> -->
            <h4 class="primary-text">PAN: {{ resultPan }}</h4>
          </v-toolbar>
        </template>

        <template v-slot:[`item.authStatus`]="{ item }">
          <span v-if="item.authStatus === 'Active'"
            ><v-chip class="bg-success"
              ><v-icon color="#fff" class="mr-2">mdi-check-decagram</v-icon>{{ item.authStatus }}</v-chip
            ></span
          >
          <span v-else
            ><v-chip class="bg-error"
              ><v-icon color="#fff" class="mr-2">mdi-alert-decagram</v-icon>{{ item.authStatus }}</v-chip
            ></span
          >
        </template>
        <template v-slot:[`item.stateCd`]="{ item }">
          <span>{{ getStateName(item) }}</span>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'
import { VueStrong } from '../typedVue'
import { validPan, stateCodeMapping } from '../utils'

@Component<SearchTaxPayerByPan>({
  async mounted() {
    await this.$store.dispatch('getCaptcha')
  },
  computed: {
    ...mapState({
      image: state => (state as IRootState).gst.captcha?.image || '',
      idToken: state => (state as IRootState).gst.captcha?.idToken || '',
      gstResults: state => (state as IRootState).tools.gst.gstResults
    })
  }
})
export default class SearchTaxPayerByPan extends VueStrong {
  captcha = ''
  pan = ''
  isFetchingCaptcha = false
  valid = false
  isResultLoaded = false
  resultPan = ''
  image?: string
  idToken?: string

  headers = [
    {
      value: 'gstin',
      text: 'GST Number',
      sortable: true,
      align: 'center'
    },
    {
      value: 'authStatus',
      text: 'Status',
      sortable: true,
      align: 'center'
    },
    {
      value: 'stateCd',
      text: 'State',
      sortable: true,
      align: 'center'
    }
  ]

  panRules = [
    (value: string) => {
      if (value) return validPan(value) ? true : 'Invalid PAN'
      return 'PAN is required'
    }
  ]
  captchaRules = [(value: string) => (value ? true : 'Captcha is required')]

  onPanInput() {
    this.isResultLoaded = false
    if (this.pan) {
      this.pan = this.pan.toUpperCase()
    }
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
    try {
      const searchTaxPayerByPan = { pan: this.pan, idToken: this.idToken, captcha: this.captcha }
      await this.$store.dispatch('getGstByPan', searchTaxPayerByPan)
      this.resultPan = this.pan
      await this.getCaptcha()
      ;(this.$refs.gstSearchByPanForm as HTMLFormElement).reset()
      this.isResultLoaded = true
    } catch (error) {
      console.log(error)
    }
  }

  getStateName(item: { gstin: string; authStatus: 'Active' | 'Inactive'; stateCd: string }) {
    return stateCodeMapping.find(state => state.c === item.stateCd).n
  }
}
</script>
