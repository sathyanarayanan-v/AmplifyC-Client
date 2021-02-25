<template>
  <v-app>
    <v-app-bar app color="#f4f7f8" elevation="0">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="120"
        />
      </div>
    </v-app-bar>

    <v-main style="background-color:#f4f7f8">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({}),
});
</script>
<style>
* {
  font-family: "Montserrat", sans-serif;
  font-size: 17px;
}
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
h2 {
  font-size: 24px;
}
.edge-12 {
  border-radius: 12px !important;
}
h3 {
  font-size: 20px;
}
</style>
