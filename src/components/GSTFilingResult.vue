<template>
  <v-container>
    <v-row transition="scale-transition">
      <v-col cols="12" lg="12" xl="12" md="12" sm="12">
        <v-data-table class="elevation-4" :options="{ itemsPerPage: 5 }" :headers="headers" :items="filings">
          <template v-slot:top>
            <v-toolbar class="bg-lightBlue" flat>
              <v-toolbar-title
                ><h4 class="primary-text">
                  <v-icon color="#0252cc" class="mr-2 mb-1">mdi-alpha-g-box</v-icon>GST Filing Results
                </h4></v-toolbar-title
              >
              <v-divider class="mx-4" inset vertical></v-divider>
              <h4 class="primary-text">GSTIN: {{ gstin }}</h4>
            </v-toolbar>
          </template>
          <template v-slot:[`item.dof`]="{ item }">
            <span>{{ getDof(item) }}</span>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'
import { GSTFiling } from '../interfaces/store/tools'
import { VueStrong } from '../typedVue'
import moment from 'moment'
@Component<GSTFilingResult>({
  computed: {
    ...mapState({
      filings: state => (state as IRootState).tools.gst.filings
    })
  }
})
export default class GSTFilingResult extends VueStrong {
  headers = [
    {
      text: 'Filing type',
      value: 'rtntype'
    },
    {
      text: 'Date of filing',
      value: 'dof',
      align: 'left'
    },
    {
      text: 'Financial year',
      value: 'fy'
    },
    {
      text: 'Mode of filing',
      value: 'mof'
    },

    {
      text: 'Status',
      value: 'status'
    },
    {
      text: 'Tax period',
      value: 'taxp'
    },
    {
      text: 'ARN',
      value: 'arn'
    }
  ]

  getDof(item: GSTFiling) {
    return moment(item.dof, 'DD/MM/YYYY').format('DD - MMM - YYYY')
  }

  @Prop({ required: true, default: '' })
  gstin: string
}
</script>
