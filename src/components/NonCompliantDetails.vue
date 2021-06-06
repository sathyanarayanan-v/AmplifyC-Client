<template>
  <v-col cols="12" sm="12" md="6" xl="6" lg="6">
    <v-data-table :headers="headers" :items="data" class="elevation-2">
      <template v-slot:top>
        <v-toolbar class="bg-lightBlue" flat>
          <v-toolbar-title
            ><h4 class="primary-text">
              <v-icon color="#0252cc" class="mr-2 mb-1">mdi-alpha-m-box</v-icon>Ministry of Corporate Affair
            </h4></v-toolbar-title
          >
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
  </v-col>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'

@Component
export default class NonCompliantDetails extends VueStrong {
  headers = [
    {
      text: 'Form Name',
      align: 'start',
      sortable: false,
      value: 'form'
    },
    { text: 'Filed for year/fy', value: 'fy', align: 'center' },
    { text: 'Date of Filing', value: 'dof', align: 'center' },
    { text: 'Compliant', value: 'compliant', align: 'center' }
  ]
  data = [
    {
      form: 'Form-7',
      fy: '2019',
      dof: '22/05/2020',
      compliant: true
    }
  ]
}
</script>
