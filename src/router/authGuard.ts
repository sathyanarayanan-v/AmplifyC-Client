import { NavigationGuard, NavigationGuardNext, Route } from 'vue-router'
import store from '@/store'

export const AuthGuard: NavigationGuard = async (to: Route, from: Route, next: NavigationGuardNext) => {
  const token = localStorage.getItem('token')
  if (!token) {
    next({ name: 'amplifyc-my-account-login' })
  }
  try {
    await store.dispatch('getCurrentUser')
    next()
  } catch (error) {
    error
  }
}
