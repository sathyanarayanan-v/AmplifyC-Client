<template>
  <v-container fluid>
    <v-row class="gst-details-container">
      <v-col cols="12" md="6" xl="4" lg="4" sm="12">
        <h4 class="font-weight-black mb-2">Legal Name of Business</h4>
        <p>{{ gstMasterData.lgnm }}</p>
      </v-col>
      <v-col cols="12" md="6" xl="4" lg="4" sm="12">
        <h4 class="font-weight-black mb-2">Trade Name</h4>
        <p>{{ gstMasterData.tradeNam }}</p></v-col
      >
      <v-col cols="12" md="6" xl="4" lg="4" sm="12">
        <h4 class="font-weight-black mb-2">Effective Date of registration</h4>
        <p>{{ gstMasterData.rgdt }}</p></v-col
      >
    </v-row>
    <v-row class="gst-details-container">
      <v-col cols="12" md="6" xl="4" lg="4" sm="12">
        <h4 class="font-weight-black mb-2">Constitution of Business</h4>
        <p>{{ gstMasterData.ctb }}</p></v-col
      >
      <v-col cols="12" md="6" xl="4" lg="4" sm="12">
        <h4 class="font-weight-black mb-2">GSTIN / UIN Status</h4>
        <p>{{ gstMasterData.sts }}</p></v-col
      >
      <v-col cols="12" md="6" xl="4" lg="4" sm="12">
        <h4 class="font-weight-black mb-2">Taxpayer Type</h4>
        <p>{{ gstMasterData.dty }}</p></v-col
      >
    </v-row>
    <v-row class="gst-details-container">
      <v-col cols="12" md="6" xl="4" lg="4" sm="12">
        <h4 class="font-weight-black mb-2">Administrative Office</h4>
        <p v-html="splitAndJoinByNewLine(gstMasterData.ctj)"></p
      ></v-col>
      <v-col cols="12" md="6" xl="4" lg="4" sm="12">
        <h4 class="font-weight-black mb-2">Other Office</h4>
        <p v-html="splitAndJoinByNewLine(gstMasterData.stj)"></p
      ></v-col>
      <v-col cols="12" md="6" xl="4" lg="4" sm="12">
        <h4 class="font-weight-black mb-2">Principal Place of Business</h4>
        <p>{{ gstMasterData.pradr.adr }}</p></v-col
      >
    </v-row>
    <v-row class="gst-details-container">
      <v-col cols="12" md="6" xl="4" lg="4" sm="12">
        <h4 class="font-weight-black mb-2">Whether Aadhaar Authenticated?</h4>
        <p>{{ gstMasterData.adhrVFlag }}</p></v-col
      >
      <v-col cols="12" md="6" xl="4" lg="4" sm="12">
        <h4 class="font-weight-black mb-2">Whether e-KYC Verified?</h4>
        <p>{{ gstMasterData.ekycVFlag }}</p></v-col
      >
      <v-col cols="12" md="6" xl="4" lg="4" sm="12"> </v-col>
    </v-row> </v-container
></template>
<script lang="ts">
import { VueStrong } from '../typedVue'
import { Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'

@Component<GSTMasterdataResult>({
  computed: {
    ...mapState({
      gstMasterData: state => (state as IRootState).tools.gst.masterData || {}
    })
  }
})
export default class GSTMasterdataResult extends VueStrong {
  splitAndJoinByNewLine(data: string) {
    return data.split(',').join('<br />')
  }
}
</script>
