import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { public: true },
    children: [
      {
        path: 'login',
        name: 'login-admin',
        component: () => import('pages/LoginOrSignUpView.vue')
      },
      {
        path: 'sign-up',
        name: 'sign-up-admin',
        component: () => import('pages/LoginOrSignUpView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/admin/AdminLayout.vue'),
    meta: { admin: true },
    children: [
      {
        path: '',
        name: 'landing',
        component: () => import('pages/admin/HomeView.vue')
      },
      {
        path: 'api-public',
        name: 'api-public',
        component: () => import('pages/admin/APIPublic/IndexView.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
