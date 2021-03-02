<template>
  <notifications :width="'50%'" class="mt-2" position="top center">
    <template slot="body" slot-scope="props">
      <v-alert dismissible :color="props.item.data.color" class="edge-12" border="left" elevation="2" colored-border>
        <div class="alert-content">
          <div class="alert-title">{{ props.item.title }}</div>
          <div class="alert-text">{{ props.item.text }}</div>
        </div>
      </v-alert>
    </template>
  </notifications>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { VueStrong } from '../typedVue'

@Component
export default class TheNotification extends VueStrong {}
</script>

<style></style>
