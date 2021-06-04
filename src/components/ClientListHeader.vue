<template>
  <v-col cols="12">
    <div class="d-flex justify-space-between">
      <h4>Your companies</h4>
      <div class="hidden-md-and-down" style="display:flex;">
        <v-menu bottom transition="scale-transition" class="nav-menu " content-class="custom-menu__content">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="text-capitalize elevation-0 mr-2  bg-primary menu-btn" height="24" v-bind="attrs" v-on="on">
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
        <v-btn class="text-capitalize elevation-0 mr-2  bg-primary menu-btn" height="24">View all</v-btn>
      </div>
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
