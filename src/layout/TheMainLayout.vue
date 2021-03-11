<template>
  <v-app>
    <amplifyc-toolbar />
    <v-main style="background-color:#f4f7f8">
      <v-row class="mx-13 my-2" no-gutters>
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
import Component from 'vue-class-component'
import TheToolbar from './TheToolbar.vue'
import TheNotification from '../components/Notifications.vue'
@Component({
  components: {
    'amplifyc-toolbar': TheToolbar,
    'amplifyc-notification': TheNotification
  }
})
export default class TheMainLayout extends VueStrong {}
</script>

<style></style>
