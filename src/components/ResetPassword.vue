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
              Please enter your new password
            </p>
            <div class="text-fields my-auto">
              <v-form v-model="valid">
                <v-text-field
                  outlined
                  autocomplete="off"
                  :rules="pwdRules"
                  label="Password"
                  v-model="pwd"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  class="mb-4"
                ></v-text-field>
                <v-text-field
                  outlined
                  autocomplete="off"
                  label="Confirm password"
                  :type="showPassword ? 'text' : 'password'"
                  :rules="[
                    value => {
                      if (!value) {
                        return 'Confirm password is required'
                      }

                      if (value !== this.pwd) {
                        return 'Passwords do not match'
                      }
                      return true
                    }
                  ]"
                  v-model="cnfrmpwd"
                  class="mb-4"
                ></v-text-field>
                <v-btn
                  :disabled="!valid"
                  @click.prevent="resetPassword"
                  type="submit"
                  color="success"
                  class="text-capitalize mr-3"
                >
                  <v-icon class="mr-2">mdi-shield-check</v-icon>
                  <h4>Reset Password</h4>
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
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'
import { VueStrong } from '../typedVue'

@Component({
  created() {
    if (!this.fpEmail) {
      this.$router.push({ name: 'amplifyc-my-account-forgot-password-code-gen' })
    }
  },
  computed: {
    ...mapState({
      fpEmail: state => (state as IRootState).auth.fpEmail
    })
  }
})
export default class ResetPassword extends VueStrong {
  valid = false
  pwd = ''
  cnfrmpwd = ''
  fpEmail!: string
  showPassword = false
  pwdRules = [
    (value: string) => {
      if (!value) {
        return 'Password is required'
      }
      return true
    }
  ]

  async resetPassword() {
    try {
      await this.$store.dispatch('resetPassword', { pwd: this.pwd, cnfrmPwd: this.cnfrmpwd, fpEmail: this.fpEmail })
      this.$store.dispatch('createNotification', {
        group: 'notification',
        title: 'Reset password success. Please login to continue.',
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
}
</script>

<style></style>
