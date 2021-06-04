<template>
  <v-navigation-drawer
    v-model="drawer"
    class="color"
    :width="210"
    permanent
    elevation="2"
    app
    :mini-variant.sync="mini"
    mini-variant-width="70"
  >
    <v-list-item @click.stop="mini = !mini" class="py-3">
      <v-img
        v-if="!mini"
        alt="Vuetify Logo"
        max-height="63"
        max-width="120"
        src="../assets/logo.png"
        transition="scale-transition"
        class="mx-auto"
      />
      <v-icon v-if="mini">mdi-format-align-left</v-icon>
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
          <v-icon class="" color="">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title color="">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
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
          target: { name: 'my-company' }
        }
      ],
      drawer: true,
      mini: true
    }
  }
}
</script>

<style scoped>
.color {
  background-color: #ffffff !important;
}
</style>
