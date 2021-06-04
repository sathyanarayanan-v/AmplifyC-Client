<template>
  <v-card>
    <v-card-title style="color:#1C62A1" class="headline grey lighten-2">
      Add new company
      <v-spacer></v-spacer>
      <v-icon @click="closeDialog" color="error">mdi-close-circle</v-icon>
    </v-card-title>
    <v-card-text class="px-3">
      <v-container class="mt-4" fluid>
        <v-form v-model="valid">
          <v-row>
            <v-col xs="12" sm="12" md="6" lg="6" xl="6">
              <v-autocomplete
                label="Type of company"
                solo
                v-model="typeOfCompany"
                :items="typesOfCompanies"
                item-text="type"
                item-value="value"
                :rules="[rules.required]"
              >
              </v-autocomplete>
            </v-col>
            <v-col xs="12" sm="12" md="6" lg="6" xl="6">
              <!-- <v-autocomplete
                v-model="company"
                :loading="loading"
                :items="companies"
                :search-input.sync="search"
                cache-items
                class=""
                @change="change"
                :item-text="getCompanyName"
                item-value="companyId"
                label="Search for your companies *"
                solo
              ></v-autocomplete> -->
              <v-text-field label="MCA Search" solo v-if="mcaSearchRequired"></v-text-field>
              <v-text-field
                label="Company Name"
                outlined
                placeholder="value.."
                v-if="!mcaSearchRequired"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Watch } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
@Component({})
export default class AddCompany extends VueStrong {
  typeOfCompany = ''
  valid = false
  mcaSearchRequired = false
  rules = { required: (value: string) => (value ? true : 'This is a required field') }
  typesOfCompanies = [
    { type: 'Private Limited Company', value: 'PVT' },
    { type: 'Limited Liability Partnership', value: 'LLP' },
    { type: 'Public Limited Company', value: 'PUB' },
    { type: 'One Person Company', value: 'OPC' },
    { type: 'Section 8 Companies', value: 'SEC8' },
    { type: 'Proprietorship', value: 'PROP' },
    { type: 'Partnership', value: 'PART' },
    { type: 'Trust', value: 'TRST' },
    { type: 'Society', value: 'SCTY' },
    { type: 'NGO', value: 'NGO' }
  ]

  @Emit('close-dialog')
  closeDialog() {
    return false
  }

  @Watch('typeOfCompany', { immediate: true })
  onTypeOfCompanyChanged(newType: string, oldType: string) {
    this.mcaSearchRequired = ['OPC', 'PVT', 'LLP'].includes(newType)
  }
}
</script>

<style></style>
