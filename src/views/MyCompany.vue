<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-2">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="font-weight-black">List of Companies</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{}">
      <v-icon small class="mr-2" color="primary">
        mdi-pencil
      </v-icon>
      <v-icon small color="error">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      No Items...
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { VueStrong } from '../typedVue'

@Component<MyCompany>({
  data: () => ({
    headers: [
      {
        text: 'S.No',
        align: 'center',
        sortable: false,
        value: 'idx'
      },
      { text: 'Company Name', value: 'company_name' },
      { text: 'CIN/LLPIN', value: 'incorporation_number' },
      { text: 'Incorporation Date', value: 'incorporation_date' },
      { text: 'State', value: 'state' },
      { text: 'Actions', value: 'actions', sortable: false }
    ]
  })
})
export default class MyCompany extends VueStrong {}
</script>

<style></style>
