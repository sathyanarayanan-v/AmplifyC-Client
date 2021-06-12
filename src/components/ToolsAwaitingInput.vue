<template>
  <v-row class="mt-13">
    <v-col cols="12">
      <v-img src="../assets/welcome_image.svg" contain max-width="200" max-height="200" class="mx-auto"></v-img>
    </v-col>
    <v-col cols="12" class="my-auto">
      <h3 class="my-auto text-center primary-text">Master data and Filings of MCA</h3>
      <h5 class="primary-text text-center lighten-1">
        Type in your company name to get master data and filings in an instant!
      </h5>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
@Component
export default class ToolsAwaitingInput extends VueStrong {}
</script>
