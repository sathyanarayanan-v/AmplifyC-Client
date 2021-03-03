<template>
  <amplifyc-login-form @login="handleLogin" @forgot-password="handleForgotPassword" @create-account="createAccount" />
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
  public handleLogin(userCreds: { username: string; password: string }) {
    console.log(userCreds)
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
