import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { AuthGuard } from './authGuard'

// Layout Imports
import AmplifyCMainLayout from '@/layout/TheMainLayout.vue'
import AmplifyCAppLayout from '@/layout/TheAppLayout.vue'

// Account component imports
import AmplifyCMyAccount from '../views/MyAccount.vue'
import AmplifyCLogin from '../components/Login.vue'
import AmplifyCForgotPasswordCodeGen from '../components/ForgotPasswordCodeGen.vue'
import AmplifyCValidateForgotPasswordCode from '../components/ValidateForgotPasswordCode.vue'
import AmplifyCResetPassword from '../components/ResetPassword.vue'
import AmplifyCCreateAccount from '../components/CreateAccount.vue'

// Profile related imports
import AmplifyCProfile from '../views/Profile.vue'
import AmplifyCEditProfile from '../components/EditProfile.vue'

// Company Related component Imports
import AmplifyCMyCompany from '@/views/Companies.vue'
import AmplifyCClientListContainer from '@/components/ClientListContainer.vue'
import AmplifyCCurrentCompany from '@/components/CurrentCompany.vue'

// Tools component importw
import AmplifyCTools from '@/views/Tools.vue'
import AmplifyCMCATools from '@/components/MCATools.vue'
import AmplifyCGSTTools from '@/components/GSTTools.vue'
import AmplifyCSearchTaxPayerByPan from '@/components/SearchTaxPayerByPan.vue'
import AmplifyCGstToolSelector from '@/components/GSTToolsSelector.vue'
import AmplifyCGstFilings from '@/components/GetGSTFiling.vue'

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
            name: 'amplifyc-my-account-login',
            meta: {
              title: 'Login'
            }
          },
          {
            path: 'forgot-password',
            component: AmplifyCForgotPasswordCodeGen,
            name: 'amplifyc-my-account-forgot-password-code-gen',
            meta: {
              title: 'Forgot Password'
            }
          },
          {
            path: 'forgot-password/verify-code',
            component: AmplifyCValidateForgotPasswordCode,
            name: 'amplifyc-my-account-forgot-password-validate-code',
            meta: {
              title: 'Verify Forgot Password Code'
            }
          },
          {
            path: 'forgot-password/reset-password',
            component: AmplifyCResetPassword,
            name: 'amplifyc-my-account-forgot-password-reset-password',
            meta: {
              title: 'Reset Password'
            }
          },
          {
            path: 'create',
            component: AmplifyCCreateAccount,
            name: 'amplifyc-my-account-new',
            meta: {
              title: 'Create New Account'
            }
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
                name: 'amplifyc-companies',
                meta: {
                  title: 'Dashboard'
                }
              }
            ]
          },
          {
            path: 'companies/:id/compliance',
            component: AmplifyCCurrentCompany,
            name: 'amplifyc-my-company',
            meta: {
              title: 'Compliant Details'
            }
          },
          {
            path: 'tools',
            name: 'amplifyc-my-tools',
            redirect: { name: 'amplifyc-mca-tools' },
            component: AmplifyCTools,
            meta: {
              title: 'Tools'
            },
            children: [
              {
                path: 'mca',
                name: 'amplifyc-mca-tools',
                component: AmplifyCMCATools,
                meta: {
                  title: 'MCA Tool',
                  mca: true
                }
              },
              {
                path: 'gst',
                name: 'amplifyc-gst-tools',
                component: AmplifyCGSTTools,
                redirect: { name: 'amplifyc-gst-tools-selector' },
                meta: {
                  title: 'GST Tool',
                  gst: true
                },
                children: [
                  {
                    path: 'select',
                    component: AmplifyCGstToolSelector,
                    name: 'amplifyc-gst-tools-selector',
                    meta: {
                      title: 'GST Tool',
                      gst: true
                    }
                  },
                  {
                    path: 'searchtp/pan',
                    name: 'amplifyc-gst-tools-search-taxpayer-by-pan',
                    component: AmplifyCSearchTaxPayerByPan,
                    meta: {
                      title: 'Search Taxpayer',
                      gst: true
                    }
                  },
                  {
                    path: 'filings',
                    name: 'amplifyc-gst-tools-filings',
                    component: AmplifyCGstFilings,
                    meta: {
                      title: 'GST Filings',
                      gst: true
                    }
                  }
                ]
              }
            ]
          },
          {
            path: 'profile',
            component: AmplifyCProfile,
            name: 'amplifyc-my-profile',
            children: [
              {
                path: 'edit',
                component: AmplifyCEditProfile,
                name: 'amplifyc-edit-my-profile',
                meta: {
                  title: 'Edit Profile'
                }
              }
            ]
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
