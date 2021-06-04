<template>
  <div>
    <amplifyc-toolbar />
    <amplifyc-sidebar />
    <router-view />
  </div>
</template>
<script lang="ts">
import TheToolbar from './TheToolbar.vue'
import TheSidebar from './TheSidebar.vue'
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'

@Component({
  components: {
    'amplifyc-toolbar': TheToolbar,
    'amplifyc-sidebar': TheSidebar
  }
})
export default class TheAppLayout extends VueStrong {}
</script>
