<template>
  <v-card height="100%" class="pa-4 edge-12">
    <v-card-text style="height:100%" class="d-flex justify-space-between flex-column">
      <div class="text-fields my-auto">
        <v-form v-model="vModel.valid">
          <v-text-field
            outlined
            class="mb-1"
            label="Username"
            :rules="usernameRules"
            v-model="vModel.username"
          ></v-text-field>
          <v-text-field
            outlined
            class="mb-1"
            label="E-mail"
            :rules="userEmailRules"
            v-model="vModel.email"
          ></v-text-field>
          <v-text-field
            outlined
            class="mb-1"
            label="Password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            :rules="passwordRules"
            v-model="vModel.password"
          ></v-text-field>
          <v-text-field
            outlined
            class="mb-1"
            label="Confirm Password"
            :rules="confirmPasswordRules"
            v-model="vModel.confirmPassword"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-btn
            :disabled="!vModel.valid"
            @click.prevent="sendVerificationCode"
            type="submit"
            color="success"
            class="text-capitalize mr-3"
          >
            <h4>Create</h4>
            <v-icon class="ml-2">mdi-check-decagram</v-icon>
          </v-btn>
        </v-form>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { VueStrong } from '../typedVue'

@Component
export default class CreateAccount extends VueStrong {
  showPassword = false
  public vModel = {
    email: '',
    password: '',
    username: '',
    confirmPassword: '',
    valid: false
  }
  userEmailRules = [
    (value: string) => !!value || 'E-mail is required',
    (value: string) => /.+@.+\..+/.test(value) || 'E-mail must be valid'
  ]
  confirmPasswordRules = [
    (value: string) => !!value || 'Confirm password is required',
    (value: string) => this.vModel.password === value || 'Passwords do not match'
  ]
  passwordRules = [(value: string) => !!value || 'Password is required']
  usernameRules = [(value: string) => !!value || 'Username is required']

  public sendVerificationCode() {
    console.log('checking code')
  }
}
</script>

<style></style>
