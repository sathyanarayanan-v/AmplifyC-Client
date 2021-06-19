<template>
  <v-row class="mt-13">
    <v-col cols="12">
      <v-img src="../assets/achievement.svg" contain max-width="200" max-height="200" class="mx-auto"></v-img>
    </v-col>
    <v-col cols="12" class="my-auto">
      <h3 class="my-auto text-center primary-text">{{ toolTitle }}</h3>
      <h5 class="primary-text text-center lighten-1">
        {{ toolDescription }}
      </h5>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
@Component
export default class ToolsAwaitingInput extends VueStrong {
  @Prop({ required: true, default: '' })
  toolDescription: string

  @Prop({ required: true, default: '' })
  toolTitle: string
}
</script>
