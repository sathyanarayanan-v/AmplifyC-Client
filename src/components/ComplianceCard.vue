<template>
  <v-card class="pull-up ">
    <v-card-title class="justify-center bg-lightBlue justify-space-between"
      ><h5 class="primary-text text-center">
        <v-icon color="#0252cc" class="mr-2 mb-1">mdi-alpha-m-box</v-icon>Ministry of Corporate Affairs
      </h5>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="d-flex justify-center">
          <div class="my-auto">
            <h4 class="dark-text">Compliant Status:</h4>
            <div class="d-flex mt-4">
              <v-icon color="success" class="mr-3">mdi-check-decagram</v-icon>
              <p class="font-weight-bold mb-0 dark-text my-auto">Compliant</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="d-flex justify-center">
          <v-progress-circular :rotate="270" :size="100" :width="15" :value="'10'" color="success" class="mt-4">
            <h3 class="dark-text mb-0">{{ '90%' }}</h3>
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { VueStrong } from '../typedVue'

@Component
export default class ComplianceCard extends VueStrong {}
</script>

<style></style>
