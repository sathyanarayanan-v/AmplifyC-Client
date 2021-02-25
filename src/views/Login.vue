<template>
  <v-container class="d-flex flex-column justify-space-between centered">
    <v-row>
      <v-col class="align-self-center hidden-sm-and-down">
        <v-container
          ><v-img height="300" width="300" class="mx-auto" src="../assets/logo.png"></v-img>
          <h2 class="text-center">
            Boost your clients and increase your revenue!
          </h2></v-container
        >
      </v-col>
      <v-col>
        <v-card height="100%" class="pa-4 edge-12">
          <v-card-text style="height:100%" class="d-flex justify-space-between flex-column">
            <div class="text-fields">
              <v-text-field outlined label="Username"></v-text-field>
              <v-text-field outlined label="Password" type="password"></v-text-field>
              <v-btn color="primary" class="text-capitalize mr-3">
                <h4>Login</h4>
              </v-btn>
              <v-btn color="warn" class="text-capitalize ml-3" text> <h4>forgot password?</h4></v-btn>
            </div>
            <v-divider></v-divider>
            <v-btn color="success" class="text-capitalize"><h3>Create Account</h3></v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AmplifyCLogin',
  data: () => ({})
})
</script>

<style></style>
