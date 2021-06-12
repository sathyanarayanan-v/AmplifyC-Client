<template>
  <v-row class="mt-13">
    <v-col cols="12" class="d-flex justify-center mt-11">
      <v-progress-circular :rotate="270" :size="100" :width="15" :value="value" :color="getColor()" class="mx-auto">
        <span class="primary-text">{{ value }}%</span>
      </v-progress-circular>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'

@Component
export default class MCAToolsResultLoader extends VueStrong {
  @Prop({ type: Number, required: true })
  value: number

  getColor() {
    if (this.value > 0 && this.value <= 50) {
      return '#F5A741'
    }
    if (this.value > 50 && this.value < 100) {
      return '#0252cc'
    }
    if (this.value === 100) {
      return 'success'
    }
  }
}
</script>
