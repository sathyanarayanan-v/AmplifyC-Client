<template>
  <v-app-bar clipped-left flat app height="80" color="#FFF">
    <div class=" nav-bar-items w-100 justify-space-between">
      <v-icon v-if="permanent[$vuetify.breakpoint.name]" @click="toggleDrawer">mdi-menu</v-icon>
      <v-img
        alt="Vuetify Logo"
        max-width="120"
        height="60"
        width="120"
        src="../assets/logo.svg"
        transition="scale-transition"
      />
      <h2 v-if="!permanent[$vuetify.breakpoint.name]" class="my-auto primary-text">{{ title }}</h2>
      <div class="app-secondary-nav-items">
        <div class="nav-item">
          <v-badge
            overlap
            bordered
            :content="notificationCount > 9 ? '9+' : notificationCount"
            :value="notificationCount > 9 ? '9+' : notificationCount"
            color="#0252cc"
          >
            <v-btn icon @click="toggleNotificationPanel">
              <v-icon>mdi-bell</v-icon>
            </v-btn>
          </v-badge>
          <v-menu bottom transition="scale-transition" class="nav-menu" content-class="custom-menu__content">
            <template v-slot:activator="{ on, attrs }">
              <v-avatar v-bind="attrs" v-on="on">
                <v-img
                  min-height="38"
                  min-width="38"
                  max-height="45"
                  max-width="45"
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
            </template>

            <v-list dense>
              <v-list-item v-for="(item, i) in items" @click="$router.push(item.link)" :key="i" class="px-4">
                <v-list-item-icon>
                  <v-icon v-text="item.icon" color="#0252cc"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text" class="primary-text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item @click="logout">
                <v-list-item-icon>
                  <v-icon color="#de3e44">mdi-power</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="error-text">Logout</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { IRootState } from '../interfaces/store/root'
import { VueStrong } from '../typedVue'

@Component({
  computed: {
    ...mapState({
      notificationCount: state => (state as IRootState).notification.persistingNotifications.length
    })
  }
})
export default class TheToolBar extends VueStrong {
  title = this.$router.currentRoute.meta.title
  items = [
    {
      text: 'Dashboard',
      icon: 'mdi-view-dashboard',
      link: { name: 'amplifyc-companies' }
    },
    {
      text: 'Tools',
      icon: 'mdi-tools',
      link: { name: 'amplifyc-my-tools' }
    },
    {
      text: 'Profile',
      icon: 'mdi-account-tie',
      link: { name: 'amplifyc-edit-my-profile' }
    }
  ]
  selectedItem = 1
  permanent = { xs: true, sm: true, md: false, lg: false, xl: false }
  toggleDrawer() {
    this.$store.dispatch('toggleDrawer', true)
  }
  toggleNotificationPanel() {
    this.$store.dispatch('toggleNotificationPanel', true)
  }
  logout() {
    localStorage.removeItem('token')
    this.$router.push({ name: 'amplifyc-my-account-login' })
  }

  @Watch('$route')
  onRouteChange() {
    this.title = this.$router.currentRoute.meta.title
  }
}
</script>

<style scoped>
::v-deep .v-toolbar__content {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
