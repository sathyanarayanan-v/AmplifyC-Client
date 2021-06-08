<template>
  <v-col cols="12">
    <v-row>
      <v-col cols="12" sm="4" md="6" lg="2" xl="2">
        <v-btn
          @click="$router.push({ name: 'amplifyc-companies' })"
          class="text-capitalize elevation-0 mr-2  bg-primary menu-btn my-auto"
          height="32"
          block
        >
          <v-icon small class="mr-2">mdi-arrow-left</v-icon>
          Back
        </v-btn>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="7" xl="7">
        <h2 class="text-center my-auto ">{{ companyName }}</h2>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="3" xl="3" class="justify-end d-flex pr-1">
        <v-btn
          style="width:50%"
          @click="loading = !loading"
          class="text-capitalize elevation-0 mr-2  bg-primary menu-btn"
          height="32"
        >
          <v-icon small class="mr-2" :class="{ 'mdi-spin': loading }"> mdi-cached</v-icon>
          Sync
        </v-btn>
        <v-btn style="width:50%" class="text-capitalize elevation-0 bg-primary menu-btn" height="32">
          <v-icon small class="mr-2">mdi-cloud-download-outline</v-icon>
          Download
        </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { ICompany } from '../interfaces/store/company'
import { VueStrong } from '../typedVue'
@Component({})
export default class CurrentCompanyHeader extends VueStrong {
  @Prop({ required: true, default: () => ({}) })
  company: ICompany
  @Prop({ required: true, type: String, default: '' })
  companyName: string

  loading = false
}
</script>
