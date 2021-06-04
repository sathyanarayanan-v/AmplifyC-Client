<template>
  <div class="mx-4">
    <dashboard-welcome />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { VueStrong } from '../typedVue'
import DashboardWelcome from '../components/DashboardWelcome.vue'
@Component<MyCompany>({
  components: {
    'dashboard-welcome': DashboardWelcome
  }
})
export default class MyCompany extends VueStrong {}
</script>

<style></style>
