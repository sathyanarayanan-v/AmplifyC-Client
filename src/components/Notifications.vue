<template>
  <div>
    <notifications group="notification" :width="width" class="mt-2" position="top center">
      <template slot="body" slot-scope="props">
        <v-alert dismissible :color="props.item.data.color" class="edge-12" border="left" elevation="2" colored-border>
          <div class="alert-content d-flex">
            <div class="alert-icon my-auto" v-if="props.item.data.icon" style="width:35px;">
              <span
                ><v-icon :color="props.item.data.color">{{ props.item.data.icon }}</v-icon></span
              >
            </div>
            <div class="alert-details">
              <div class="alert-title">{{ props.item.title }}</div>
              <div class="alert-text">{{ props.item.text }}</div>
            </div>
          </div>
        </v-alert>
      </template>
    </notifications>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'
import { INotification } from '../interfaces/common.interface'
import { IRootState } from '../interfaces/store/root'
import { mapState } from 'vuex'
import { Watch } from 'vue-property-decorator'

@Component<TheNotification>({
  computed: {
    ...mapState({
      notifications: state => (state as IRootState).notification.notifications
    }),
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '96%'
        case 'sm':
          return '96%'
        case 'md':
          return '40%'
        case 'lg':
          return '40%'
        case 'xl':
          return '40%'
      }
    }
  }
})
export default class TheNotification extends VueStrong {
  public notifications!: Array<INotification>

  @Watch('notifications.0', { deep: true })
  onNewNotification(val: INotification, oldVal: INotification) {
    this.$notify({ ...val, group: 'notification', duration: 5000 })
  }
}
</script>

<style></style>
