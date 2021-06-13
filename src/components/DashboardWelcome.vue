<template
  >
  <v-row>
    <v-col lg="9" cols="12">
      <v-card class="pull-up bg-lightBlue" width="100%">
        <v-row>
          <v-col lg="3" md="3" sm="3" xl="3" cols="12" class="py-2 my-auto">
            <v-img src="../assets/welcome_image.svg" height="100" width="100%" contain> </v-img>
          </v-col>
          <v-col lg="9" md="9" sm="9" xl="9" cols="12" class="pb-0 ma-auto">
            <h2 class="font-weight-black primary-text pa-2">Hello {{ user.name }}, Welcome back!</h2>
            <p class="mt-2 ml-1 pa-2" v-html="quotes[randomNumber]"></p>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col lg="3" cols="12" class="my-auto">
      <v-card width="100%" class="bg-website" elevation="0">
        <v-row>
          <v-col lg="12" md="6" sm="6" xl="12" cols="12" class="pb-0 ma-auto">
            <h3 class="font-weight-black primary-text mb-4 text-center">You have new Clients? Add them!</h3>
          </v-col>
          <v-col lg="12" md="6" sm="6" xl="12" cols="12" class="pb-0">
            <add-company />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
import AddCompany from '../components/AddCompany.vue'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'
@Component<DashboardWelcome>({
  components: {
    'add-company': AddCompany
  },
  computed: {
    randomNumber() {
      return Math.floor(Math.random() * 8) + 1
    },
    ...mapState({
      user: (state) => (state as IRootState).auth.currentUser
    })
  }
})
export default class DashboardWelcome extends VueStrong {
  quotes = [
    'Blank',
    "Dude, suckin' at something is the first step at being sorta good at something.<br>- <b> Jake </b> <small><em>(Adventure Time)</em></small>",
    'Either I will find a way, or I will make one.<br> - <b>Philip Sidney</b>',
    'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.<br>- <b>Thomas A. Edison</b>',
    'You are never too old to set another goal or to dream a new dream.<br>- <b>C.S Lewis</b>',
    'If you can dream it, you can do it.<br>- <b>Walt Disney</b>',
    'Never give up, for that is just the place and time that the tide will turn.<br>- <b>Harriet Beecher Stowe</b>',
    "I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.<br>- <b>Muhammad Ali</b>",
    'If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.<br>- <b>Bruce Lee</b>'
  ]
}
</script>
