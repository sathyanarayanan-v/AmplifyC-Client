<template>
  <div class="mt-4">
    <v-row>
      <v-col cols="12" sm="4" md="6" lg="2" xl="2">
        <v-btn
          @click="$router.push({ name: 'amplifyc-companies' })"
          class="text-capitalize elevation-0 mr-2  bg-primary menu-btn my-auto"
          height="32"
          block
        >
          <v-icon small class="mr-2">mdi-arrow-left</v-icon>
          Back
        </v-btn>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="7" xl="7">
        <h2 class="text-center my-auto ">Edit Profile</h2>
      </v-col>
    </v-row>
    <v-container class="mt-4">
      <v-row class="mt-6">
        <v-col cols="12" sm="6" md="6" xl="2" lg="2" class="py-0 pr-0 ">
          <h4 class="text-center font-weight-black my-2">Username:</h4>
        </v-col>
        <v-col cols="12" sm="6" md="6" xl="3" lg="3" class="py-0 pl-0">
          <v-text-field
            :disabled="true"
            solo
            v-model="user.username"
            hint="username is not editable at the moment"
            persistent-hint
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" xl="2" lg="2" class="py-0 pr-0 ">
          <h4 class="text-center font-weight-black my-2">Your email:</h4>
        </v-col>
        <v-col cols="12" sm="6" md="6" xl="3" lg="3" class="py-0 pl-0">
          <v-text-field
            solo
            v-model="editedUser.email"
            hint="Note: This email will be used incase to reset password"
            persistent-hint
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-6 ">
        <v-col cols="12" sm="6" md="6" xl="2" lg="2" class="py-0 pr-0 ">
          <h4 class="text-center font-weight-black my-2">Your name:</h4>
        </v-col>
        <v-col cols="12" sm="6" md="6" xl="3" lg="3" class="py-0 pl-0">
          <v-text-field solo v-model="editedUser.name"></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-11">
        <v-spacer></v-spacer>
        <!-- <v-btn class="bg-success mr-2 text-capitalize"><v-icon class="mr-2">mdi-check-decagram</v-icon>Sumbit </v-btn> -->
        <v-btn class="bg-success mr-2 text-capitalize"><v-icon class="mr-2">mdi-check-decagram</v-icon>Sumbit </v-btn>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'
import { IUser } from '../interfaces/store/user'
import { VueStrong } from '../typedVue'

@Component<EditProfile>({
  computed: {
    ...mapState({
      user: state => (state as IRootState).auth.currentUser
    })
  },
  created() {
    this.editedUser = Object.assign({}, this.user)
  }
})
export default class EditProfile extends VueStrong {
  user?: IUser
  editedUser: Partial<IUser> = {}
}
</script>
