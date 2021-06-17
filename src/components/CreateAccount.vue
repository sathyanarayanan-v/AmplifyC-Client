<template>
  <v-container class="d-flex flex-column justify-space-between centered">
    <v-row>
      <v-col class="align-self-center hidden-md-and-down">
        <v-container
          ><v-img height="320" width="300" class="mx-auto" src="../assets/logo.svg"></v-img>
          <h2 class="text-center">Boost your clients and increase your revenue!</h2></v-container
        >
      </v-col>
      <v-col>
        <v-card height="100%" class="pa-4">
          <v-card-text style="height: 100%" class="d-flex justify-space-between flex-column">
            <div class="text-fields my-auto">
              <p class="font-weight-bold text-center primary-text">Please provide the following details to sign up</p>
              <v-form v-model="vModel.valid">
                <v-text-field
                  solo
                  class="mb-1"
                  label="Your name"
                  :rules="nameRules"
                  v-model="vModel.name"
                ></v-text-field>
                <v-text-field
                  solo
                  class="mb-1"
                  label="Username"
                  :rules="usernameRules"
                  v-model="vModel.username"
                ></v-text-field>
                <v-text-field
                  solo
                  class="mb-1"
                  label="E-mail"
                  :rules="userEmailRules"
                  v-model="vModel.email"
                ></v-text-field>
                <v-text-field
                  solo
                  class="mb-1"
                  label="Password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  :rules="passwordRules"
                  v-model="vModel.password"
                ></v-text-field>
                <v-text-field
                  solo
                  class="mb-1"
                  label="Confirm Password"
                  :rules="confirmPasswordRules"
                  v-model="vModel.confirmPassword"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>

                <v-btn @click.prevent="goBack" class="bg-error mr-2 text-capitalize">
                  <h4>Cancel</h4>
                  <v-icon class="ml-2">mdi-close-circle</v-icon>
                </v-btn>
                <v-btn
                  :disabled="!vModel.valid"
                  @click.prevent="createAccount"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'

@Component
export default class CreateAccount extends VueStrong {
  showPassword = false
  public vModel = {
    email: '',
    password: '',
    username: '',
    confirmPassword: '',
    valid: false,
    name: ''
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
  nameRules = [(value: string) => !!value || 'Your name is required']

  async createAccount() {
    try {
      await this.$store.dispatch('createUser', this.vModel)
      this.$store.dispatch('createNotification', {
        group: 'notification',
        title: 'Account created. Please login to continue',
        text: '',
        time: Date.now().toString(),
        data: {
          color: 'success',
          icon: 'mdi-check-decagram'
        }
      })
      this.$router.push({ name: 'amplifyc-my-account-login' })
    } catch (error) {
      console.error(error)
    }
  }
  goBack() {
    this.$router.push({ name: 'amplifyc-my-account-login' })
  }
}
</script>

<style></style>
