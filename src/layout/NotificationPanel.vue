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
        </v-list-item>
        <v-divider
          notification
          :key="idx"
          v-if="idx !== 0 || idx !== notifications.length - 1"
          :inset="false"
        ></v-divider>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
import * as moment from 'moment'
export default {
  name: 'NotificationPanel',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      notificationPanel: state => state.ui.notificationPanel,
      notifications: state => state.notification.notifications
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
    }
  },
  created() {
    // console.log(this.notificationPanel)
  }
}
</script>

<style scoped>
.color {
  background-color: #ffffff !important;
}
</style>
