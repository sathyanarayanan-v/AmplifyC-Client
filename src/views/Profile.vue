<template>
  <div class="px-2">
    <dashboard-welcome />
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
import DashboardWelcome from '../components/DashboardWelcome.vue'
@Component<Profile>({
  components: {
    'dashboard-welcome': DashboardWelcome
  }
})
export default class Profile extends VueStrong {}
</script>
