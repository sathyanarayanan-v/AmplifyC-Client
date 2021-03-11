<template>
  <v-container class="d-flex flex-column justify-space-between centered">
    <v-row>
      <v-col class="align-self-center hidden-sm-and-down">
        <v-container
          ><v-img height="320" width="300" class="mx-auto" src="../assets/logo.png"></v-img>
          <h2 class="text-center">
            Boost your clients and increase your revenue!
          </h2></v-container
        >
      </v-col>
      <v-col>
        <amplifyc-login-form
          @login="handleLogin"
          @forgot-password="handleForgotPassword"
          @create-account="createAccount"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
import LoginForm from '../components/LoginForm.vue'
@Component({
  components: {
    'amplifyc-login-form': LoginForm
  }
})
export default class AmplifyCLogin extends VueStrong {
  public async handleLogin(userCreds: { username: string; password: string }) {
    try {
      await this.$store.dispatch('login', userCreds)
    } catch (error) {
      error
    }
  }
  public handleForgotPassword() {
    this.$router.push({ name: 'amplifyc-my-account-forgot-password-code-gen' })
  }
  public createAccount() {
    console.log('')
  }
}
</script>

<style></style>
