<template>
  <v-card height="100%" class="pa-4 edge-12">
    <v-card-text style="height:100%" class="d-flex justify-space-between flex-column">
      <v-img height="170" width="170" class="mx-auto hidden-md-and-up" src="../assets/logo.png"></v-img>
      <div class="text-fields">
        <v-form v-model="valid">
          <p class="font-weight-bold text-center" color="#000">Please login with your credentials to continue</p>
          <v-text-field
            autocomplete="off"
            outlined
            label="Username"
            :rules="usernameRules"
            v-model="username"
            class="mb-2"
          ></v-text-field>
          <v-text-field
            outlined
            label="Password"
            :rules="passwordRules"
            autocomplete="off"
            v-model="password"
            class="mb-2"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            :loading="loading"
            @click.prevent="login"
            type="submit"
            color="primary"
            class="text-capitalize mr-6 mb-2"
          >
            <h4>Login</h4>
          </v-btn>
          <v-btn color="primary" text elevation="1" @click="forgotPassword" class="text-capitalize mb-2">
            <h4>forgot password?</h4></v-btn
          >
        </v-form>
      </div>
      <v-divider class="my-3"></v-divider>
      <v-btn color="success" @click="createAccount" class="text-capitalize my-3"><h3>Create Account</h3></v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { VueStrong } from '../typedVue'
import Component from 'vue-class-component'
import { Emit, Prop } from 'vue-property-decorator'

@Component
export default class LoginForm extends VueStrong {
  username = ''
  password = ''
  valid = false
  showPassword = false

  usernameRules = [(value: string) => (value ? true : 'Username is required')]
  passwordRules = [(value: string) => (value ? true : 'Password is required')]

  @Prop({ type: Boolean, required: true, default: false })
  loading: boolean

  @Emit('login')
  login() {
    return { username: this.username, password: this.password }
  }

  @Emit()
  createAccount() {
    this.$router.push({ name: 'amplifyc-my-account-new' })
  }

  @Emit()
  forgotPassword() {
    return {}
  }
}
</script>
<style></style>
