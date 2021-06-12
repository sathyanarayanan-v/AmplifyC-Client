<template>
  <v-row transition="scale-transition" class="mca-details-container mt-0">
    <!-- Master data -1  -->
    <v-col cols="12" lg="12" xl="12" md="12" sm="12">
      <h5 class="primary-text mb-2">
        <v-icon color="#0252cc" class="mr-2 mb-1">mdi-database-check</v-icon>Company Master Data - 1
      </h5>
      <v-data-table
        class="elevation-2"
        :headers="master_data_headers"
        :hide-default-footer="true"
        :items="[masterData]"
      >
        <template v-slot:[`item.date_of_agm`]="{ item }">
          <span v-if="item.date_of_agm">{{ getFormattedDate(item.date_of_agm) }}</span>
          <span v-else>-</span>
        </template>
        <template v-slot:[`item.date_of_bs`]="{ item }">
          <span v-if="item.date_of_bs">{{ getFormattedDate(item.date_of_bs) }}</span>
          <span v-else>-</span>
        </template>
        <template v-slot:[`item.date_of_incorporation`]="{ item }">
          <strong v-if="item.date_of_incorporation">{{ getFormattedDate(item.date_of_incorporation) }}</strong>
          <span v-else>-</span>
        </template>
        <template v-slot:[`item.authorized_capital`]="{ item }">
          <span v-if="item.authorized_capital">{{ getCurrency(item.authorized_capital) }}</span>
          <span v-else>-</span>
        </template>
      </v-data-table>
    </v-col>

    <!-- Master data -2  -->
    <v-col cols="12" lg="12" xl="12" md="12" sm="12">
      <h5 class="primary-text mb-2">
        <v-icon color="#0252cc" class="mr-2 mb-1">mdi-database-check</v-icon>Company Master Data - 2
      </h5>
      <v-data-table
        :hide-default-footer="true"
        class="elevation-2"
        :headers="master_data_headers_2"
        :items="[masterData]"
      >
        <template v-slot:[`item.paid_capital`]="{ item }">
          <span v-if="item.paid_capital">{{ getCurrency(item.paid_capital) }}</span>
          <span v-else>-</span>
        </template>
      </v-data-table>
    </v-col>

    <!-- Director Details  -->
    <v-col cols="12" lg="6" xl="6" md="12" sm="12">
      <h5 class="primary-text mb-2">
        <v-icon color="#0252cc" class="mr-2 mb-1">mdi-account-check</v-icon>Director Details
      </h5>
      <v-data-table class="elevation-2" :headers="director_details_header" :items="directors"></v-data-table>
    </v-col>

    <!-- Charges  -->
    <v-col cols="12" lg="6" xl="6" md="12" sm="12" v-if="charges">
      <h5 class="primary-text mb-2">
        <v-icon color="#0252cc" class="mr-2 mb-1">mdi-cash-remove</v-icon>Charge Details
      </h5>
      <v-data-table
        class="elevation-2"
        :headers="charges_header"
        :hide-default-footer="true"
        :items="[charges]"
      ></v-data-table>
    </v-col>

    <!-- Filings  -->
    <v-col cols="12" lg="12" xl="12" md="12" sm="12">
      <h5 class="primary-text mb-2"><v-icon color="#0252cc" class="mr-2 mb-1">mdi-history</v-icon>MCA Filings</h5>
      <v-data-table class="elevation-2" :headers="filings_header" :items="filings">
        <template v-slot:[`item.documentId`]="{ item }">
          <a v-if="item.documentId" @click="download(item)">Download</a>
          <span v-else>-</span>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'
import { VueStrong } from '../typedVue'
import { MCAFilings } from '../interfaces/store/tools'
import * as moment from 'moment'
@Component<MCAToolsResult>({
  computed: {
    ...mapState({
      masterData: state => (state as IRootState).tools.mca.masterData,
      filings: state => (state as IRootState).tools.mca.filings,
      charges: state =>
        (state as IRootState).tools.mca.masterData && (state as IRootState).tools.mca.masterData.charges,
      directors: state =>
        (state as IRootState).tools.mca.masterData && (state as IRootState).tools.mca.masterData.directors
    })
  }
})
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
    { text: 'Serial No', value: 'srn', align: 'center', sortable: true },
    { text: 'Form', value: 'form', align: 'center', sortable: true },
    { text: 'Date of filing', value: 'dof', align: 'center', sortable: true },
    { text: 'Document ID', value: 'documentId', align: 'center', sortable: true }
  ]

  download(item: MCAFilings) {
    let windowObject = null
    windowObject = window.open(
      '',
      '_blank',
      'height=800,width=800,status=1,toolbar=0,menubar=0,resizable=1,scrollbars=1'
    )
    let tempHtml = ''
    tempHtml += '<html>'
    tempHtml += '<body>'
    tempHtml += "<form method=post action='https://www.mca.gov.in/mcafoportal/viewChallan.do'>"
    tempHtml += "<input type=hidden name='srn' value='" + item.srn + "' >"
    tempHtml += "<input type=hidden name='documentID' value='" + item.documentId + "' >"
    tempHtml += 'Processing Request.....'
    tempHtml += '</form>'
    tempHtml += '</body>'
    tempHtml += '</html>'
    windowObject.document.open('text/html')
    windowObject.document.write(tempHtml)
    windowObject.document.forms[0].submit()
    windowObject.focus()
  }

  getFormattedDate(date: string) {
    return moment(date, 'DD/MM/YYYY').format('DD-MMM-YY')
  }
  getCurrency(currency: string) {
    const amount = parseInt(currency)
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount)
  }
}
</script>
