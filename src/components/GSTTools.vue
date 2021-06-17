<template>
  <router-view />
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
@Component({
  created() {
    console.log('im created')
  }
})
export default class GSTTools extends VueStrong {}
</script>
