<template>
  <div class="mx-4">
    <dashboard-welcome />
    <client-lits />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { VueStrong } from '../typedVue'
import DashboardWelcome from '../components/DashboardWelcome.vue'
import ClientListContainer from '../components/ClientListContainer.vue'

@Component<MyCompany>({
  components: {
    'dashboard-welcome': DashboardWelcome,
    'client-lits': ClientListContainer
  }
})
export default class MyCompany extends VueStrong {}
</script>

<style></style>
