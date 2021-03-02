<template>
  <v-app-bar v-if="!nonAppBarRoutes.includes($route.name)" app color="#f4f7f8" elevation="0">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="mr-2"
        contain
        src="../assets/logo.png"
        transition="scale-transition"
        width="120"
      />
      <v-btn :to="{ name: 'amplifyc-login' }" text class="text-capitalize edge-7" active-class="route-active"
        ><h4>My Companies</h4></v-btn
      >
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { VueStrong } from '../typedVue'

@Component
export default class TheToolBar extends VueStrong {
  nonAppBarRoutes = ['amplifyc-login']
}
</script>

<style></style>
