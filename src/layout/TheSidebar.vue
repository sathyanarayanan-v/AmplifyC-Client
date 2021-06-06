<template>
  <v-navigation-drawer
    class="color"
    :width="300"
    elevation="2"
    app
    :permanent="permanent[$vuetify.breakpoint.name]"
    :mini-variant.sync="mini"
    mini-variant-width="75"
  >
    <v-list-item class="py-3">
      <v-list-item-avatar>
        <v-icon>mdi-account-circle</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-tooltip bottom content-class="sidebarTooltip">
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on"
              ><v-list-item-title v-text="'svvsathyanarayanan@gmail.com'"></v-list-item-title
            ></span>
          </template>
          <span>svvsathyanarayanan@gmail.com</span>
        </v-tooltip>
      </v-list-item-content>

      <v-list-item-action>
        <v-tooltip bottom content-class="sidebarLogoutTooltip">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon @click="$router.push({ name: 'amplifyc-my-account-login' })">
              <v-icon>mdi-power</v-icon>
            </v-btn>
          </template>
          <span>Logout</span>
        </v-tooltip>
      </v-list-item-action>
    </v-list-item>

    <v-divider color="#fff"></v-divider>

    <v-list nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        class="sidebar mt-2 py-0"
        :to="item.target"
        color="#0252CC"
        dark
      >
        <v-list-item-icon>
          <v-icon class="" color="#0252CC">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title style="color:#0252CC !important"
            ><h5>{{ item.title }}</h5></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2" v-if="!mini" style="bottom:0px">
        <v-btn text @click="mini = !mini">
          <v-icon>mdi-menu-open</v-icon>
        </v-btn>
      </div>
      <div class="pa-2" v-if="mini" style="bottom:0px">
        <v-btn text @click="mini = !mini">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'TheSidebar',
  data() {
    return {
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-home',
          target: { name: 'amplifyc-companies' }
        },
        {
          title: 'Tools',
          icon: 'mdi-tools',
          target: { name: 'amplifyc-my-account' }
        }
      ],

      mini: true,
      permanent: { xs: false, sm: false, md: true, lg: true, xl: true }
    }
  }
}
</script>

<style scoped>
.color {
  background-color: #ffffff !important;
}
</style>
