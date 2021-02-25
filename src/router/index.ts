import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AmplifyCLogin from '../views/Login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    component: AmplifyCLogin,
    name: 'amplifyc-login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
