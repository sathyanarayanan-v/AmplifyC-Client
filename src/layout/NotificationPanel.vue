<template>
  <v-navigation-drawer
    :value="notificationPanel"
    @input="setNotificationPanel"
    class="color"
    :width="300"
    elevation="2"
    right
    app
    temporary
    height="100%"
  >
    <v-list-item class="py-3">
      <v-list-item-title class="d-flex">
        <h4 class="my-auto">Notifications</h4>
        <v-spacer></v-spacer>
        <v-tooltip bottom content-class="sidebarLogoutTooltip">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon>
              <v-icon>mdi-bell-check-outline</v-icon>
            </v-btn>
          </template>
          <span>Mark all as read</span>
        </v-tooltip>
      </v-list-item-title>

      <v-list-item-action>
        <v-tooltip bottom content-class="sidebarLogoutTooltip">
          <template v-slot:activator="{ on, attrs }">
            <v-btn @click="setNotificationPanel(false)" icon color="error" v-bind="attrs" v-on="on">
              <v-icon>mdi-close-circle-outline</v-icon>
            </v-btn>
          </template>
          <span>Close</span>
        </v-tooltip>
      </v-list-item-action>
    </v-list-item>

    <v-divider color="#fff"></v-divider>

    <!-- <v-list nav>
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
          <v-list-item-title style="color:#0252CC !important" class="ml-11"
            ><h5>{{ item.title }}</h5></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2" v-if="!mini" style="bottom:0px">
        <v-btn text>
          <v-icon>mdi-menu-open</v-icon>
        </v-btn>
      </div>
      <div class="pa-2" style="bottom:0px">
        <v-btn text>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </template> -->
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NotificationPanel',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      notificationPanel: state => state.ui.notificationPanel
    })
  },
  methods: {
    setNotificationPanel(e) {
      this.$store.dispatch('toggleNotificationPanel', e)
    }
  },
  created() {
    console.log(this.notificationPanel)
  }
}
</script>

<style scoped>
.color {
  background-color: #ffffff !important;
}
</style>
