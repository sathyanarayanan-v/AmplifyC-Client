<template>
  <v-navigation-drawer
    :value="drawer"
    @input="setDrawer"
    class="color"
    :width="300"
    elevation="4"
    app
    clipped
    expand-on-hover
    :permanent="permanent[$vuetify.breakpoint.name]"
    :mini-variant.sync="mini"
    mini-variant-width="75"
  >
    <!-- <v-list-item class="py-3">
      <v-list-item-avatar>
        <v-icon>mdi-account-circle</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-tooltip bottom content-class="sidebarTooltip">
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on"
              ><v-list-item-title>{{ currentUser.email }}</v-list-item-title></span
            >
          </template>
          <span>{{ currentUser.email }}</span>
        </v-tooltip>
      </v-list-item-content>

      <v-list-item-action>
        <v-tooltip bottom content-class="sidebarLogoutTooltip">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon @click="logout">
              <v-icon>mdi-power</v-icon>
            </v-btn>
          </template>
          <span>Logout</span>
        </v-tooltip>
      </v-list-item-action>
    </v-list-item> -->

    <v-list nav>
      <v-list-item
        v-for="(item, idx) in items"
        :key="idx"
        link
        class="sidebar mt-2 py-0"
        :to="item.target"
        color="#0252CC"
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
      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-icon>
            <v-icon class="" color="#0252CC">mdi-account-tie</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="color:#0252CC !important" class="ml-11"><h5>Profile</h5></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="item in profileMenu" :key="item.title" link :to="item.target" class="px-6">
          <v-list-item-icon>
            <v-icon class="" color="#0252CC">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color:#0252CC !important" class="ml-11"
              ><h5>{{ item.title }}</h5></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
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
import { mapState } from 'vuex'
export default {
  name: 'TheSidebar',
  data() {
    return {
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          target: { name: 'amplifyc-companies' }
        },
        {
          title: 'Tools',
          icon: 'mdi-tools',
          target: { name: 'amplifyc-my-tools' }
        }
        // ,
        // {
        //   title: 'My Profile',
        //   icon: 'mdi-account-tie',
        //   target: { name: 'amplifyc-my-profile' }
        // }
      ],
      profileMenu: [
        {
          title: 'Edit',
          icon: 'mdi-account-edit',
          target: { name: 'amplifyc-edit-my-profile' }
        },
        {
          title: 'Change password',
          icon: 'mdi-account-key',
          target: { name: 'amplifyc-companies' }
        }
      ],
      mini: true,
      permanent: { xs: false, sm: false, md: true, lg: true, xl: true }
    }
  },
  computed: {
    ...mapState({
      drawer: state => state.ui.drawer,
      currentUser: state => {
        return state.auth.currentUser
      }
    })
  },
  methods: {
    setDrawer(e) {
      this.$store.dispatch('toggleDrawer', e)
    },
    logout() {
      localStorage.removeItem('token')
      this.$router.push({ name: 'amplifyc-my-account-login' })
    }
  }
}
</script>

<style scoped>
.color {
  background-color: #ffffff !important;
}
</style>
