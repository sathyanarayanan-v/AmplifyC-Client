<template>
  <v-app>
    <amplifyc-toolbar />
    <amplifyc-main-layout />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TheToolbar from "./layout/TheToolbar.vue";
import TheMainLayout from "./layout/TheMainLayout.vue";
export default Vue.extend({
  name: "App",
  components: {
    "amplifyc-toolbar": TheToolbar,
    "amplifyc-main-layout": TheMainLayout,
  },
});
</script>
<style></style>
