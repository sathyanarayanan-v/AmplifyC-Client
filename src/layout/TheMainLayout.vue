<template>
  <v-app>
    <v-main class="mt-4" style="background-color:#F8F9FB">
      <v-row class="my-2" no-gutters>
        <v-col>
          <v-row align="start" justify="start">
            <v-col cols="12" sm="12" md="12">
              <v-fade-transition name="fade" mode="out-in">
                <router-view />
              </v-fade-transition>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-main>
    <amplifyc-notification />
  </v-app>
</template>

<script>
import { VueStrong } from '../typedVue'
import { Component } from 'vue-property-decorator'
import TheNotification from '../components/Notifications.vue'

@Component({
  components: {
    'amplifyc-notification': TheNotification
  }
})
export default class TheMainLayout extends VueStrong {}
</script>

<style></style>
