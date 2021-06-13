<template>
  <v-container class="d-flex flex-column justify-space-between centered">
    <v-row>
      <v-col class="align-self-center hidden-sm-and-down">
        <v-container
          ><v-img height="320" width="300" class="mx-auto" src="../assets/logo.png"></v-img>
          <h2 class="text-center">Boost your clients and increase your revenue!</h2></v-container
        >
      </v-col>
      <v-col>
        <v-card height="100%" class="pa-4 edge-12">
          <v-card-text style="height: 100%" class="d-flex justify-space-between flex-column">
            <p class="font-weight-bold text-center primary-text">
              Please enter the verification code sent to your mail address
            </p>
            <div class="text-fields my-auto">
              <v-form v-model="valid">
                <v-text-field
                  outlined
                  label="Code"
                  :rules="sixDigitCodeRules"
                  v-model="code"
                  autocomplete="off"
                  class="mb-4"
                ></v-text-field>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'
import { VueStrong } from '../typedVue'

@Component<ValidateForgotPasswordCode>({
  created() {
    if (!this.fpEmail) {
      this.$router.push({ name: 'amplifyc-my-account-forgot-password-code-gen' })
    }
  },

  computed: {
    ...mapState({
      fpEmail: (state) => (state as IRootState).auth.fpEmail
    })
  }
})
export default class ValidateForgotPasswordCode extends VueStrong {
  valid = false
  code = ''
  fpEmail!: string
  sixDigitCodeRules = [(value: string) => (!!value && value.length === 6 && !isNaN(+value)) || 'Enter valid code']

  public async checkVerificationCode() {
    try {
      await this.$store.dispatch('validateFpCode', { email: this.fpEmail, code: this.code })
      this.$store.dispatch('setFpCode', this.code)
      this.$router.push({ name: 'amplifyc-my-account-forgot-password-reset-password' })
    } catch (error) {
      //
    }
  }
}
</script>

<style></style>
