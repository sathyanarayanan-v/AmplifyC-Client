<template>
  <v-row transition="scale-transition" class="mca-details-container mt-0">
    <v-col cols="12" lg="12" xl="12" md="12" sm="12">
      <h5 class="primary-text mb-2">
        <v-icon color="#0252cc" class="mr-2 mb-1">mdi-database-check</v-icon>Company Master Data - 1
      </h5>
      <v-data-table class="elevation-2" :headers="master_data_headers"></v-data-table>
    </v-col>
    <v-col cols="12" lg="12" xl="12" md="12" sm="12">
      <h5 class="primary-text mb-2">
        <v-icon color="#0252cc" class="mr-2 mb-1">mdi-database-check</v-icon>Company Master Data - 2
      </h5>
      <v-data-table class="elevation-2" :headers="master_data_headers_2"></v-data-table>
    </v-col>
    <v-col cols="12" lg="12" xl="12" md="12" sm="12">
      <h5 class="primary-text mb-2">
        <v-icon color="#0252cc" class="mr-2 mb-1">mdi-account-check</v-icon>Director Details
      </h5>
      <v-data-table class="elevation-2" :headers="director_details_header"></v-data-table>
    </v-col>
    <v-col cols="12" lg="12" xl="12" md="12" sm="12">
      <h5 class="primary-text mb-2">
        <v-icon color="#0252cc" class="mr-2 mb-1">mdi-cash-remove</v-icon>Charge Details
      </h5>
      <v-data-table class="elevation-2" :headers="charges_header"></v-data-table>
    </v-col>
    <v-col cols="12" lg="12" xl="12" md="12" sm="12">
      <h5 class="primary-text mb-2"><v-icon color="#0252cc" class="mr-2 mb-1">mdi-history</v-icon>MCA Filings</h5>
      <v-data-table class="elevation-2" :headers="filings_header"></v-data-table>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'

@Component
export default class MCAToolsResult extends VueStrong {
  master_data_headers = [
    {
      text: 'Authorized Capital',
      sortable: false,
      value: 'authorized_capital'
    },
    { text: 'Category', value: 'category', align: 'center', sortable: false },
    { text: 'Class of Company', value: 'class_of_company', align: 'center', sortable: false },
    { text: 'Incorporation Date', value: 'date_of_incorporation', align: 'center', sortable: false },
    { text: 'Email', value: 'email', align: 'center', sortable: false },
    { text: 'Date of AGM', value: 'date_of_agm', align: 'center', sortable: false },
    { text: 'Date of BS', value: 'date_of_bs', align: 'center', sortable: false }
  ]
  master_data_headers_2 = [
    { text: 'Filing Status', value: 'filing_status', align: 'center', sortable: false },
    { text: 'Listed', value: 'listed', align: 'center', sortable: false },
    { text: 'Number of members', value: 'number_of_members', align: 'center', sortable: false },
    { text: 'Paid Capital', value: 'paid_capital', align: 'center', sortable: false },
    { text: 'Reg Off Address', value: 'registered_office_address', align: 'center', sortable: false },
    { text: 'RoC', value: 'roc', align: 'center', sortable: false },
    { text: 'Sub Category', value: 'sub_category', align: 'center', sortable: false },
    { text: 'Registration Number', value: 'registration_number', align: 'center', sortable: false }
  ]

  director_details_header = [
    { text: 'DIN/PAN', value: 'din/pan', align: 'center', sortable: false },
    { text: 'Name', value: 'name', align: 'center', sortable: false },
    { text: 'Begin Date', value: 'begin_date', align: 'center', sortable: false },
    { text: 'End Date', value: 'end_date', align: 'center', sortable: false }
  ]

  charges_header = [
    { text: 'Assets Under Charge', value: 'assets_under_charge', align: 'center', sortable: false },
    { text: 'Charge Amount', value: 'charge_amount', align: 'center', sortable: false },
    { text: 'Date of Creation', value: 'date_of_creation', align: 'center', sortable: false },
    { text: 'Date of modification', value: 'date_of_modification', align: 'center', sortable: false },
    { text: 'Status', value: 'status', align: 'center', sortable: false }
  ]
  filings_header = [
    { text: 'Date of filing', value: 'dof', align: 'center', sortable: true },
    { text: 'Form', value: 'form', align: 'center', sortable: true },
    { text: 'Serial No', value: 'srn', align: 'center', sortable: true },
    { text: 'Document ID', value: 'documentId', align: 'center', sortable: false }
  ]
}
</script>
