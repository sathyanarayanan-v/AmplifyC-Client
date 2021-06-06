<template>
  <v-col xl="3" lg="4" md="6" cols="12">
    <v-card @click="$router.push({ name: 'amplifyc-my-company', params: { id: '1' } })" class="bg-secondary pull-up">
      <v-container class="pa-5 pr-4">
        <v-row>
          <v-col sm="8" md="8" lg="8" xl="8">
            <div class="d-flex justify-space-between">
              <div class="d-flex overflow-y-scroll">
                <v-btn class="text-capitalize elevation-0 mr-2  menu-btn-inverted" height="24">
                  MCA
                  <v-icon small class="ml-2">
                    mdi-check-decagram
                  </v-icon>
                </v-btn>
                <v-btn class="text-capitalize elevation-0 mr-2  menu-btn-inverted" height="24">
                  GST
                  <v-icon small class="ml-2">
                    mdi-check-decagram
                  </v-icon>
                </v-btn>
                <v-btn class="text-capitalize elevation-0 mr-2  menu-btn-inverted" height="24">
                  ITR
                  <v-icon small class="ml-2">
                    mdi-check-decagram
                  </v-icon>
                </v-btn>
              </div>
            </div>
            <h4 class="mt-7">Beez Innovation Labs Private Limited</h4>
            <p class="mb-0 mt-2">Date of inc : 22/05/2021</p>
          </v-col>
          <v-col sm="4" md="4" lg="4" xl="4" class="flex-column d-flex justify-center">
            <v-row class="mt-2">
              <v-col cols="12" class="justify-center d-flex pt-0">
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="'10'"
                  color="primary"
                  class="ma-auto"
                >
                  {{ '10%' }}
                </v-progress-circular>
              </v-col>
              <v-col cols="12" class="justify-center d-flex pa-0">
                <h6 class="mb-0">Total Progress</h6>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { VueStrong } from '../typedVue'

@Component
export default class ClientList extends VueStrong {}
</script>

<style></style>
