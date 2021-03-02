<template>
  <v-app>
    <amplifyc-toolbar />
    <amplifyc-main-layout />
    <amplifyc-notification />
  </v-app>
</template>

<script lang="ts">
import { VueStrong } from './typedVue'
import TheToolbar from './layout/TheToolbar.vue'
import TheMainLayout from './layout/TheMainLayout.vue'
import TheNotification from './components/Notifications.vue'
export default VueStrong.extend({
  name: 'App',
  components: {
    'amplifyc-toolbar': TheToolbar,
    'amplifyc-main-layout': TheMainLayout,
    'amplifyc-notification': TheNotification
  }
})
</script>
