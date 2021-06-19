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
        <v-col cols="12" lg="6" xl="6" md="6" sm="6">
          <div class="d-flex">
            <v-text-field :rules="gstRules" dense solo placeholder="Enter your GST number" class="mr-4"></v-text-field>
            <v-btn :disabled="!valid" :loading="isSubmitting" @click="submit" class="bg-success mr-2 text-capitalize"
              ><v-icon class="mr-2">mdi-check-decagram</v-icon>Sumbit
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <tools-awaiting-input
        toolDescription="Type in your gst number to get latest gst filings in an instant!"
        toolTitle="Get GST filings"
      />
    </v-form>
  </v-container>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
import { validateGST } from '../utils'
import ToolsAwaitingInput from '../components/ToolsAwaitingInput.vue'
@Component<GetGSTFiling>({
  components: {
    'tools-awaiting-input': ToolsAwaitingInput
  }
})
export default class GetGSTFiling extends VueStrong {
  valid = false
  isSubmitting = false

  // Rules
  gstRules = [
    (value: string) => (value ? true : 'GST is required'),
    (value: string) => (validateGST(value) ? true : 'Invalid GST')
  ]

  submit() {
    console.log('hello')
  }
}
</script>
