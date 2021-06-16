<template>
  <v-col cols="12">
    <div class="d-flex justify-space-between">
      <h3 class="ma-auto">Your Clients</h3>
      <v-spacer></v-spacer>
      <v-menu left bottom transition="scale-transition" class="nav-menu " content-class="custom-menu__content">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="text-capitalize elevation-0 mr-2 hidden-md-and-down bg-primary menu-btn"
            height="32"
            v-bind="attrs"
            v-on="on"
          >
            Sort By
            <v-icon small class="ml-2">mdi-arrow-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item-group v-model="model">
            <template v-for="(item, i) in sortItems">
              <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>

              <v-list-item
                v-else
                :key="`item-${i}`"
                :value="item.title"
                active-class="primary-text text--accent-4"
                @click="item.action"
              >
                <template v-slot:default="{ active }">
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-icon v-text="item.icon" class="mr-2" color="#0252cc"></v-icon>
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-checkbox :input-value="active" color="#0252cc"></v-checkbox>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </template>
          </v-list-item-group>
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
        v-model="searchText"
        @input="search"
      ></v-text-field>
    </div>
  </v-col>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
@Component<ClientListHeader>({})
export default class ClientListHeader extends VueStrong {
  model = ''
  searchText = ''
  sortItems = [
    {
      icon: 'mdi-label',
      title: 'Name',
      action: () => {
        this.$store.dispatch('sortByName')
      }
    },
    {
      icon: 'mdi-calendar-month',
      title: 'Date of Incorporation',
      action: () => {
        this.$store.dispatch('sortByInc')
      }
    },
    {
      icon: 'mdi-school',
      title: 'Compliance Score',
      action: () => {
        console.log('Score')
      }
    }
  ]
  search() {
    this.$store.dispatch('search', this.searchText.toLowerCase())
  }
}
</script>
