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
        <v-card height="100%" class="pa-4 edge-12">
          <v-card-text style="height:100%" class="d-flex justify-space-between flex-column">
            <p class="font-weight-bold text-center" color="#000">
              Verification code will be sent to registered email address
            </p>
            <div class="text-fields my-auto">
              <v-form v-model="valid">
                <v-text-field
                  outlined
                  label="E-mail"
                  :rules="userEmailRules"
                  v-model="email"
                  class="mb-4"
                ></v-text-field>
                <v-btn
                  :disabled="!valid"
                  @click.prevent="sendVerificationCode"
                  type="submit"
                  color="success"
                  class="text-capitalize mr-3"
                  :loading="loading"
                >
                  <h4>Send Code</h4>
                  <v-icon class="ml-2">mdi-send</v-icon>
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
import Component from 'vue-class-component'
import { VueStrong } from '../typedVue'

@Component
export default class ForgotPasswordCodeGen extends VueStrong {
  email = ''
  valid = false
  loading = false

  userEmailRules = [
    (value: string) => !!value || 'E-mail is required',
    (value: string) => /.+@.+\..+/.test(value) || 'E-mail must be valid'
  ]

  public async sendVerificationCode() {
    try {
      this.loading = true
      await this.$store.dispatch('sendForgotPasswordCode', this.email)
      this.$store.dispatch('createNotification', {
        group: 'notification',
        title: 'Email sent to ' + this.email + '. Kindly check your inbox.',
        text: '',
        time: Date.now().toString(),
        data: {
          color: 'success',
          icon: 'mdi-check-decagram'
        }
      })
      this.$router.push({ name: 'amplifyc-my-account-forgot-password-validate-code' })
      this.loading = false
    } catch (error) {
      this.loading = false
    }
  }
}
</script>

<style></style>
