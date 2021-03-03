<template>
  <v-card height="100%" class="pa-4 edge-12">
    <v-card-text style="height:100%" class="d-flex justify-space-between flex-column">
      <div class="text-fields">
        <v-form v-model="valid">
          <p class="font-weight-bold text-center" color="#000">Please login with your credentials to continue</p>
          <v-text-field outlined label="Username" :rules="usernameRules" v-model="username" class="mb-2"></v-text-field>
          <v-text-field
            outlined
            label="Password"
            :rules="passwordRules"
            type="password"
            v-model="password"
            class="mb-2"
          ></v-text-field>
          <v-btn :disabled="!valid" @click.prevent="login" type="submit" color="primary" class="text-capitalize mr-3">
            <h4>Login</h4>
          </v-btn>
          <v-btn color="error" @click="forgotPassword" class="text-capitalize ml-3" text>
            <h4>forgot password?</h4></v-btn
          >
        </v-form>
      </div>
      <v-divider></v-divider>
      <v-btn color="success" @click="createAccount" class="text-capitalize"><h3>Create Account</h3></v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { VueStrong } from '../typedVue'
import Component from 'vue-class-component'
import { Emit } from 'vue-property-decorator'

@Component
export default class LoginForm extends VueStrong {
  username = ''
  password = ''
  valid = false
  passwordRules = [(value: string) => (value ? true : 'Password is required')]
  usernameRules = [(value: string) => (value ? true : 'Password is required')]
  @Emit('login')
  login() {
    return { username: this.username, password: this.password }
  }

  @Emit()
  createAccount() {
    this.$router.push({ name: 'amplifyc-login' })
  }

  @Emit()
  forgotPassword() {
    return {}
  }
}
</script>
<style></style>
