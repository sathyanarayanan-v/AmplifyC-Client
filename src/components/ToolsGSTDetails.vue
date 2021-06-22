<template>
  <v-container fluid>
    <v-form v-model="valid" class="mb-11" ref="gstDetailsForm">
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
          <h4 class="font-weight-black mb-2">GSTIN/UIN <span class="error-text">*</span></h4>
          <v-text-field
            v-model="gst"
            solo
            placeholder="Enter your GSTIN number*"
            :rules="gstRules"
            @input="onGstInput"
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
        <v-btn :disabled="!valid" class="bg-success text-capitalize" :loading="loading" @click.prevent="submit">
          <v-icon class="mr-2">mdi-check-decagram</v-icon>Sumbit
        </v-btn>
      </v-row>
    </v-form>
    <gst-details-result v-if="isResultLoaded" :gstin="resultGst" />
    <tools-awaiting-input
      v-if="!isResultLoaded"
      toolDescription="Type in your gst number to get latest gst filings and gst details in an instant!"
      toolTitle="Get your GST Details"
    />
  </v-container>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'
import { VueStrong } from '../typedVue'
import { validateGST } from '../utils'
import ToolsAwaitingInput from './ToolsAwaitingInput.vue'
import ToolsGSTDetailsResult from './ToolsGSTDetailsResult.vue'

@Component<ToolsGSTDetails>({
  async mounted() {
    await this.$store.dispatch('getCaptcha')
  },
  components: {
    'gst-details-result': ToolsGSTDetailsResult,
    'tools-awaiting-input': ToolsAwaitingInput
  },
  computed: {
    ...mapState({
      image: state => (state as IRootState).gst.captcha?.image || '',
      idToken: state => (state as IRootState).gst.captcha?.idToken || '',
      gstResults: state => (state as IRootState).tools.gst.gstResults
    })
  }
})
export default class ToolsGSTDetails extends VueStrong {
  captcha = ''
  gst = ''
  isFetchingCaptcha = false
  valid = false
  isResultLoaded = false
  resultGst = ''

  gstRules = [
    (value: string) => {
      if (value) return validateGST(value) ? true : 'Invalid GST'
      return 'GST is required'
    }
  ]
  captchaRules = [(value: string) => (value ? true : 'Captcha is required')]

  onGstInput() {
    this.isResultLoaded = false
    if (this.gst) {
      this.gst = this.gst.toUpperCase()
    }
  }

  loading = false
  image?: string
  idToken?: string

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
    this.loading = true
    try {
      await Promise.all([
        this.$store.dispatch('getGstMasterData', {
          gstin: this.gst,
          idToken: this.idToken,
          captcha: this.captcha
        }),
        this.$store.dispatch('getGstFilings', this.gst)
      ])
      this.resultGst = this.gst
      this.isResultLoaded = true
    } catch (error) {
      return error
    } finally {
      this.loading = false
      ;(this.$refs.gstDetailsForm as HTMLFormElement).reset()
    }
  }
}
</script>
