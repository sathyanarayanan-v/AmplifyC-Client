import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AmplifyCLogin from '../components/Login.vue'
import AmplifyCMyAccount from '../views/MyAccount.vue'
import AmplifyCForgotPasswordCodeGen from '../components/ForgotPasswordCodeGen.vue'
import AmplifyCValidateForgotPasswordCode from '../components/ValidateForgotPasswordCode.vue'
import AmplifyCResetPassword from '../components/ResetPassword.vue'
import AmplifyCCreateAccount from '../components/CreateAccount.vue'
import AmplifyCMainLayout from '@/layout/TheMainLayout.vue'
import AmplifyCMyCompany from '@/views/Companies.vue'
import AmplifyCAppLayout from '@/layout/TheAppLayout.vue'
import AmplifyCClientListContainer from '@/components/ClientListContainer.vue'
import AmplifyCCurrentCompany from '@/components/CurrentCompany.vue'
import AmplifyCTools from '@/views/Tools.vue'
import { AuthGuard } from './authGuard'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: AmplifyCMainLayout,
    redirect: { name: 'amplifyc-home' },
    children: [
      {
        path: 'my-account',
        component: AmplifyCMyAccount,
        name: 'amplifyc-my-account',
        children: [
          {
            path: 'login',
            component: AmplifyCLogin,
            name: 'amplifyc-my-account-login'
          },
          {
            path: 'forgot-password',
            component: AmplifyCForgotPasswordCodeGen,
            name: 'amplifyc-my-account-forgot-password-code-gen'
          },
          {
            path: 'forgot-password/verify-code',
            component: AmplifyCValidateForgotPasswordCode,
            name: 'amplifyc-my-account-forgot-password-validate-code'
          },
          {
            path: 'forgot-password/reset-password',
            component: AmplifyCResetPassword,
            name: 'amplifyc-my-account-forgot-password-reset-password'
          },
          {
            path: 'new',
            component: AmplifyCCreateAccount,
            beforeEnter: AuthGuard,
            name: 'amplifyc-my-account-new'
          }
        ]
      },
      {
        path: 'home',
        component: AmplifyCAppLayout,
        name: 'amplifyc-home',
        redirect: { name: 'amplifyc-companies' },
        beforeEnter: AuthGuard,
        children: [
          {
            path: 'companies',
            component: AmplifyCMyCompany,
            name: 'amplifyc-dashboard',
            redirect: { name: 'amplifyc-companies' },
            children: [
              {
                path: 'dashboard',
                component: AmplifyCClientListContainer,
                name: 'amplifyc-companies'
              }
            ]
          },
          {
            path: 'companies/:id/compliance',
            component: AmplifyCCurrentCompany,
            name: 'amplifyc-my-company'
          },
          {
            path: 'tools',
            name: 'amplifyc-my-tools',
            component: AmplifyCTools
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
