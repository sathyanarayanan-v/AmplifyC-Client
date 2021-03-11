<template>
  <router-view />
</template>

<script lang="ts">
import { VueStrong } from './typedVue'

export default VueStrong.extend({
  name: 'App'
})
</script>
<style lang="scss">
.v-messages__message {
  line-height: 14px !important;
}
</style>
