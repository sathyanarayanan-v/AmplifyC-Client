<template>
  <v-card height="100%" class="pa-4 edge-12">
    <v-card-text style="height:100%" class="d-flex justify-space-between flex-column">
      <p class="font-weight-bold text-center" color="#000">Verification code is sent to registered email address</p>
      <div class="text-fields my-auto">
        <v-form v-model="valid">
          <v-text-field outlined label="E-mail" :rules="userEmailRules" v-model="email" class="mb-4"></v-text-field>
          <v-btn
            :disabled="!valid"
            @click.prevent="sendVerificationCode"
            type="submit"
            color="success"
            class="text-capitalize mr-3"
          >
            <h4>Send Code</h4>
            <v-icon class="ml-2">mdi-send</v-icon>
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
export default class ForgotPasswordCodeGen extends VueStrong {
  email = ''
  valid = false
  userEmailRules = [
    (value: string) => !!value || 'E-mail is required',
    (value: string) => /.+@.+\..+/.test(value) || 'E-mail must be valid'
  ]

  public sendVerificationCode() {
    console.log('checking code')
    this.$router.push({ name: 'amplifyc-my-account-forgot-password-validate-code' })
  }
}
</script>

<style></style>
