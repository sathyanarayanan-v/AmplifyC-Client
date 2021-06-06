<template>
  <v-col cols="12">
    <div class="d-flex justify-space-between">
      <h3>Your Clients</h3>
      <v-spacer></v-spacer>
      <v-menu bottom transition="scale-transition" class="nav-menu " content-class="custom-menu__content">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="text-capitalize elevation-0 mr-2 hidden-md-and-down bg-primary menu-btn"
            height="32"
            v-bind="attrs"
            v-on="on"
          >
            Some text
            <v-icon small class="ml-2">mdi-arrow-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-text-field
        solo
        width="20px"
        autocomplete="off"
        class="company-search elevation-4 ml-4"
        clearable
        label="Search"
        append-icon="mdi-magnify"
      ></v-text-field>
    </div>
  </v-col>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
@Component
export default class ClientListHeader extends VueStrong {
  items = [{ title: 'hello' }, { title: 'hello' }, { title: 'hello' }, { title: 'hello' }]
}
</script>
