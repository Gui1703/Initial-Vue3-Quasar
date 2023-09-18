import { route } from 'quasar/wrappers'
import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'
import { useLoginOrSignUpPinia } from 'stores/login-or-sign-up'
import { storeToRefs } from 'pinia'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = createWebHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory('/')
  })

  Router.beforeEach((to, from, next) => {
    const store = useLoginOrSignUpPinia()
    const { getAccessToken } = storeToRefs(store)

    if (to.meta.admin && !getAccessToken.value) {
      next({ name: 'login-admin' })
    } else if (to.path === '/' && getAccessToken.value) {
      next({ name: from.name ?? 'landing' })
    } else if (to.path === '/' && !getAccessToken.value) {
      next({ name: 'login-admin' })
    } else {
      next()
    }
  })

  return Router
})
