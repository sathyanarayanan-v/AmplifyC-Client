<template>
  <v-card height="100%" class="pa-4 edge-12">
    <v-card-text style="height:100%" class="d-flex justify-space-between flex-column">
      <p class="font-weight-bold text-center" color="#000">
        Please enter the verification code sent to your mail address
      </p>
      <div class="text-fields my-auto">
        <v-form v-model="valid">
          <v-text-field outlined label="Code" :rules="sixDigitCodeRules" v-model="code" class="mb-4"></v-text-field>
          <v-btn
            :disabled="!valid"
            @click.prevent="checkVerificationCode"
            type="submit"
            color="success"
            class="text-capitalize mr-3"
          >
            <h4>Verify</h4>
            <v-icon class="ml-2">mdi-shield-check</v-icon>
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
export default class ValidateForgotPasswordCode extends VueStrong {
  valid = false
  code = ''
  sixDigitCodeRules = [
    (value: string) => (!!value && value.length === 6 && !isNaN(+value)) || 'Enter valid 6-digit code'
  ]

  public checkVerificationCode() {
    console.log('checking code')
  }
}
</script>

<style></style>
