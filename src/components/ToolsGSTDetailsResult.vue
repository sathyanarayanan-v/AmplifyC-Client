<template>
  <v-card>
    <v-card-title style="height:96px" class="bg-lightBlue">
      <h4 class="primary-text text-center mr-2">
        <v-icon color="#0252cc" class="mr-2 mb-1">mdi-alpha-g-box</v-icon>GST Master Data
      </h4>
      <v-divider inset vertical></v-divider>
      <h5 class="primary-text text-center ml-2">GSTIN: {{ gstin }}</h5>
    </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="6" xl="6" md="6" sm="12"><gst-master-data /></v-col>
        <v-col cols="12" lg="6" xl="6" md="6" sm="12">
          <gst-filing-result :gstin="gstin" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import { VueStrong } from '../typedVue'
import { Component, Prop } from 'vue-property-decorator'
import GSTFilingResult from './GSTFilingResult.vue'
import GSTMasterdataResult from './GSTMasterdataResult.vue'

@Component({
  components: {
    'gst-filing-result': GSTFilingResult,
    'gst-master-data': GSTMasterdataResult
  }
})
export default class ToolsGSTDetailsResult extends VueStrong {
  @Prop({ required: true, type: String, default: '' })
  gstin: string
}
</script>
