<template>
  <v-app-bar app height="80" color="#F8F9FB" elevation="0">
    <div class="hidden-md-and-down nav-bar-items w-100">
      <div class="app-primary-nav-items">
        <div class="nav-item">
          <v-btn>
            <v-icon>mdi-wechat</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-email-outline</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-wechat</v-icon>
          </v-btn>
        </div>
      </div>
      <v-spacer></v-spacer>
      <div class="app-secondary-nav-items">
        <div class="nav-item">
          <v-btn>
            <v-icon>mdi-arrow-expand-all</v-icon>
          </v-btn>
          <v-text-field
            solo
            width="20px"
            autocomplete="off"
            class="nav-search"
            clearable
            label="Search"
            append-icon="mdi-magnify"
          ></v-text-field>
          <v-btn>
            <v-icon>mdi-wechat</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-bell</v-icon>
          </v-btn>
          <v-menu bottom transition="scale-transition" class="nav-menu">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
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
    <div class="nav-bar-items w-100 hidden-lg-and-up">
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
          <v-btn>
            <v-icon>mdi-arrow-expand-all</v-icon>
          </v-btn>
          <v-text-field
            solo
            width="20px"
            autocomplete="off"
            class="nav-search hidden-md-and-down"
            clearable
            label="Search"
            append-icon="mdi-magnify"
          ></v-text-field>
          <v-btn>
            <v-icon>mdi-wechat</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-bell</v-icon>
          </v-btn>
          <v-menu bottom transition="scale-transition" class="nav-menu">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
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
import Component from 'vue-class-component'
import { VueStrong } from '../typedVue'

@Component
export default class TheToolBar extends VueStrong {
  items = [{ title: 'hello' }, { title: 'hello' }, { title: 'hello' }, { title: 'hello' }]
}
</script>

<style></style>
