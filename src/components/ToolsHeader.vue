<template>
  <v-tabs right background-color="#f8f9fb" class="text-primary">
    <v-tab v-for="(item, idx) in toolsTab" :key="idx" class="text-capitalize">
      <div class="d-flex">
        <v-icon class="mr-2">{{ item.icon }}</v-icon>
        <span class="my-auto">{{ item.name }}</span>
      </div>
    </v-tab>
    <v-tab-item class="bg-lightWHite" style="height:100%">
      <!-- MCA Tool -->
      <mca-tool />
    </v-tab-item>
  </v-tabs>
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
import MCATools from './MCATools.vue'
@Component({
  components: {
    'mca-tool': MCATools
  }
})
export default class ToolsHeader extends VueStrong {
  toolsTab = [
    { name: 'MCA', icon: 'mdi-alpha-m-circle' },
    { name: 'GST', icon: 'mdi-alpha-g-circle' },
    { name: 'ITR', icon: 'mdi-alpha-i-circle' }
  ]
  active = true
}
</script>
