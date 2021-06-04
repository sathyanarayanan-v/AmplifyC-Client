<template>
  <v-row class="mt-4">
    <client-list-header />
    <client-list v-for="(item, idx) in [1, 2, 3, 4, 5]" :key="idx" />
  </v-row>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
import ClientListHeader from './ClientListHeader.vue'
import ClientList from './ClientList.vue'
@Component({
  components: {
    'client-list-header': ClientListHeader,
    'client-list': ClientList
  }
})
export default class ClientListContainer extends VueStrong {}
</script>
