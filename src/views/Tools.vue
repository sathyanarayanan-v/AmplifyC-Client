<template>
  <my-tools-header />
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
import ToolsHeader from '../components/ToolsHeader.vue'
@Component({
  components: {
    'my-tools-header': ToolsHeader
  }
})
export default class Tools extends VueStrong {}
</script>
