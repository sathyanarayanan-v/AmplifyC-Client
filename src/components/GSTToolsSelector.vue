<template>
  <v-container>
    <v-row class="pa-2">
      <v-col v-for="(item, idx) in gstTools" :key="idx" cols="12" xl="4" lg="4" md="6" sm="6">
        <v-card class="pull-up client-list">
          <v-card-title style="height:96px" class="justify-center bg-lightBlue  justify-space-between"
            ><h5 class="primary-text text-center mx-auto">
              <v-icon large color="#0252cc" class="mx-auto mb-1">{{ item.icon }}</v-icon>
            </h5></v-card-title
          >
          <v-card-text>
            <v-row class="pa-7">
              <v-col cols="12">
                <h2 class="text-center">{{ item.title }}</h2>
              </v-col>
              <v-col cols="12">
                <h4 class="text-center">{{ item.description }}</h4>
              </v-col>
              <v-col cols="12" class="d-flex justify-center">
                <v-btn class="menu-btn mt-11 elevation-0 text-capitalize" link :to="item.link" block>Get Started</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
@Component
export default class GSTToolsSelector extends VueStrong {
  gstTools = [
    {
      icon: 'mdi-briefcase-check-outline',
      title: 'View your GST Details',
      description: 'Enter your GST number and check your GST details along with latest filings',
      link: { name: 'amplifyc-gst-tools-details' }
    },
    {
      icon: 'mdi-book-check-outline',
      title: 'Check your GST Filings',
      description: 'Enter your GST number to get your GST filings in an instant',
      link: { name: 'amplifyc-gst-tools-filings' }
    },
    {
      icon: 'mdi-book-search-outline',
      title: 'Search taxpayer using PAN',
      description: 'Enter your PAN number to find your GST number',
      link: { name: 'amplifyc-gst-tools-search-taxpayer-by-pan' }
    }
  ]
}
</script>
