<template>
  <div>
    <v-tabs
      right
      background-color="#fff"
      class="text-primary"
      slider-color="#0252cc"
      color="#0252cc"
      center-active
      :value="currentTab"
    >
      <v-tab v-for="(item, idx) in toolsTab" :key="idx" class="text-capitalize" :to="item.link">
        <div class="d-flex">
          <v-icon class="mr-2">{{ item.icon }}</v-icon>
          <span class="my-auto">{{ item.name }}</span>
        </div>
      </v-tab>
    </v-tabs>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
import MCATools from './MCATools.vue'
// import GSTTools from './GSTTools.vue'
@Component({
  components: {
    'mca-tool': MCATools
    // 'gst-tool': GSTTools
  }
})
export default class ToolsHeader extends VueStrong {
  toolsTab = [
    { name: 'MCA', icon: 'mdi-alpha-m-circle', link: { name: 'amplifyc-mca-tools' } },
    { name: 'GST', icon: 'mdi-alpha-g-circle', link: { name: 'amplifyc-gst-tools-selector' } },
    { name: 'ITR', icon: 'mdi-alpha-i-circle', link: { name: 'amplifyc-companies' } }
  ]
  active = true
  currentTab = this.$router.currentRoute.meta.mca ? 'mca' : this.$router.currentRoute.meta.gst ? 'gst' : 'itr'
  @Watch('$route')
  onRouteChange() {
    if (this.$router.currentRoute.meta.gst) {
      this.currentTab = 'gst'
    }
    if (this.$router.currentRoute.meta.mca) {
      this.currentTab = 'mca'
    }
    if (this.$router.currentRoute.meta.itr) {
      this.currentTab = 'itr'
    }
    console.log(this.currentTab)
  }
}
</script>
