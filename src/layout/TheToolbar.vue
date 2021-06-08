<template>
  <v-app-bar app height="80" color="#F8F9FB" elevation="0">
    <div class=" nav-bar-items w-100 justify-space-between">
      <v-icon v-if="permanent[$vuetify.breakpoint.name]" @click="toggleDrawer">mdi-menu</v-icon>
      <div class="ml-6"></div>
      <div class="ml-6"></div>
      <v-img
        alt="Vuetify Logo"
        max-height="63"
        max-width="120"
        src="../assets/logo.png"
        transition="scale-transition"
        class="mx-auto"
      />
      <div class="app-secondary-nav-items">
        <div class="nav-item">
          <v-btn @click="toggleNotificationPanel">
            <v-icon>mdi-bell</v-icon>
          </v-btn>
          <v-menu bottom transition="scale-transition" class="nav-menu" content-class="custom-menu__content">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="ml-2" icon v-bind="attrs" v-on="on">
                <v-icon color="black">mdi-account</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'

@Component
export default class TheToolBar extends VueStrong {
  items = [{ title: 'hello' }, { title: 'hello' }, { title: 'hello' }, { title: 'hello' }]
  permanent = { xs: true, sm: true, md: false, lg: false, xl: false }
  toggleDrawer() {
    this.$store.dispatch('toggleDrawer', true)
  }
  toggleNotificationPanel() {
    this.$store.dispatch('toggleNotificationPanel', true)
  }
}
</script>

<style></style>
