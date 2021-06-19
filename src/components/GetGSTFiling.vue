<template>
  <v-container fluid>
    <v-row>
      <v-col lg="4" xl="4" sm="12" md="12" cols="12">
        <h5 class="primary-text"><v-icon color="#0252cc" class="mr-2 mb-1">mdi-lock</v-icon>Enter required Details</h5>
      </v-col>
      <!-- Dummy Column -->
      <v-col lg="6" xl="6" sm="12" md="12" cols="12"></v-col>
    </v-row>
    <v-form v-model="valid">
      <v-row>
        <v-col cols="12" lg="6" xl="6" md="12" sm="12">
          <div class="d-flex">
            <v-text-field
              v-model="gstin"
              :rules="gstRules"
              dense
              solo
              placeholder="Enter your GST number"
              class="mr-4"
              @input="onGstinInputChange"
            ></v-text-field>
            <v-btn :disabled="!valid" :loading="loading" @click="submit" class="bg-success mr-2 text-capitalize"
              ><v-icon class="mr-2">mdi-check-decagram</v-icon>Sumbit
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <tools-awaiting-input
        v-if="!isResultLoaded"
        toolDescription="Type in your gst number to get latest gst filings in an instant!"
        toolTitle="Get GST filings"
      />
      <gst-filing-result v-if="isResultLoaded" :gstin="gstin" />
    </v-form>
  </v-container>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
import { validateGST } from '../utils'
import ToolsAwaitingInput from '../components/ToolsAwaitingInput.vue'
import GSTFilingResult from './GSTFilingResult.vue'
@Component<GetGSTFiling>({
  components: {
    'tools-awaiting-input': ToolsAwaitingInput,
    'gst-filing-result': GSTFilingResult
  }
})
export default class GetGSTFiling extends VueStrong {
  valid = false
  isSubmitting = false
  isResultLoaded = false

  gstin = ''
  loading = false
  // Rules
  gstRules = [
    (value: string) => (value ? true : 'GST is required'),
    (value: string) => (validateGST(value) ? true : 'Invalid GST')
  ]

  onGstinInputChange() {
    if (this.gstin) {
      this.gstin = this.gstin.toUpperCase()
    }
    this.isResultLoaded = false
  }

  async submit() {
    try {
      this.loading = true
      await this.$store.dispatch('getGstFilings', this.gstin)
      this.isResultLoaded = true
    } catch (error) {
      return error
    } finally {
      this.loading = false
    }
  }
}
</script>
