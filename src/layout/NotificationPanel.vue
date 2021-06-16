<template>
  <v-navigation-drawer
    :value="notificationPanel"
    @input="setNotificationPanel"
    class="color"
    :width="width"
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
            <v-btn @click="readAllNotification" v-bind="attrs" v-on="on" icon>
              <v-icon color="#0252cc">mdi-bell-check-outline</v-icon>
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

    <v-list three-line>
      <template v-for="(notification, idx) in notifications">
        <v-list-item :key="notification.time">
          <v-list-item-avatar>
            <v-icon :color="notification.data.color">{{ notification.data.icon }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ notification.title }}</v-list-item-title>
            <v-tooltip bottom content-class="sidebarLogoutTooltip">
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-subtitle v-bind="attrs" v-on="on">{{
                  getNotificationTime(notification.time)
                }}</v-list-item-subtitle>
              </template>
              <span>{{ getExactNotificationTime(notification.time) }}</span>
            </v-tooltip>
          </v-list-item-content>
          <v-list-item-action>
            <v-tooltip bottom content-class="sidebarLogoutTooltip">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" @click="readNotification(notification.id)">
                  <v-icon :color="notification.data.color">mdi-close-circle-outline</v-icon>
                </v-btn>
              </template>
              <span>Close</span>
            </v-tooltip>
          </v-list-item-action>
        </v-list-item>
        <v-divider notification :key="idx" :inset="false"></v-divider>
      </template>
    </v-list>
    <template v-slot:append>
      <div class="pa-2" v-if="!mini" style="bottom:0px">
        <v-tooltip top right content-class="sidebarLogoutTooltip">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="toggleNotificationWidth">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <span>Minimise</span>
        </v-tooltip>
      </div>
      <div class="pa-2" v-if="mini" style="bottom:0px">
        <v-tooltip top right content-class="sidebarLogoutTooltip">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="toggleNotificationWidth">
              <v-icon>mdi-menu-open</v-icon>
            </v-btn>
          </template>
          <span>Maximise</span>
        </v-tooltip>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
import * as moment from 'moment'
export default {
  name: 'NotificationPanel',
  data() {
    return {
      mini: true,
      width: 300
    }
  },
  computed: {
    ...mapState({
      notificationPanel: state => state.ui.notificationPanel,
      notifications: state => state.notification.persistingNotifications
    })
  },
  methods: {
    setNotificationPanel(e) {
      this.$store.dispatch('toggleNotificationPanel', e)
    },
    getNotificationTime(time) {
      try {
        const unix = Math.ceil(parseInt(time) / 1000)
        return moment.unix(unix).fromNow()
      } catch (error) {
        return ''
      }
    },
    getExactNotificationTime(time) {
      try {
        const unix = Math.ceil(parseInt(time) / 1000)
        return moment.unix(unix).format('LLLL')
      } catch (error) {
        return ''
      }
    },
    readNotification(id) {
      this.$store.dispatch('readNotification', id)
    },
    toggleNotificationWidth() {
      this.mini = !this.mini
      this.width = this.mini ? 300 : '100%'
    },
    readAllNotification() {
      this.$store.dispatch('readAllNotifications')
    }
  }
}
</script>

<style scoped>
.color {
  background-color: #ffffff !important;
}
</style>
