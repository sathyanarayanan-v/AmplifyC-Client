<template>
  <v-main style="background-color:#f4f7f8">
    <v-row class="mx-13 my-2" no-gutters>
      <v-col>
        <v-row align="start" justify="start">
          <v-col cols="12" sm="12" md="12">
            <v-fade-transition name="fade" mode="out-in">
              <router-view />
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "TheMainLayout",
});
</script>

<style></style>
