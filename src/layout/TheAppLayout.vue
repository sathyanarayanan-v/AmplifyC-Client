<template>
  <div>
    <amplifyc-toolbar />
    <amplifyc-sidebar />
    <router-view />
    <amplifyc-notification-panel />
  </div>
</template>
<script lang="ts">
import TheToolbar from './TheToolbar.vue'
import TheSidebar from './TheSidebar.vue'
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
import NotificationPanel from './NotificationPanel.vue'

@Component({
  components: {
    'amplifyc-toolbar': TheToolbar,
    'amplifyc-sidebar': TheSidebar,
    'amplifyc-notification-panel': NotificationPanel
  }
})
export default class TheAppLayout extends VueStrong {}
</script>
