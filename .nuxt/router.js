import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f2b3b08 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _37bde6e0 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _55a4774a = () => interopDefault(import('..\\pages\\Mytodo.vue' /* webpackChunkName: "pages/Mytodo" */))
const _7100f6de = () => interopDefault(import('..\\pages\\Regestration.vue' /* webpackChunkName: "pages/Regestration" */))
const _222aba22 = () => interopDefault(import('..\\pages\\Todo.vue' /* webpackChunkName: "pages/Todo" */))
const _0db00c9c = () => interopDefault(import('..\\pages\\Update.vue' /* webpackChunkName: "pages/Update" */))
const _b9f16cce = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Home",
    component: _1f2b3b08,
    name: "Home"
  }, {
    path: "/Login",
    component: _37bde6e0,
    name: "Login"
  }, {
    path: "/Mytodo",
    component: _55a4774a,
    name: "Mytodo"
  }, {
    path: "/Regestration",
    component: _7100f6de,
    name: "Regestration"
  }, {
    path: "/Todo",
    component: _222aba22,
    name: "Todo"
  }, {
    path: "/Update",
    component: _0db00c9c,
    name: "Update"
  }, {
    path: "/",
    component: _b9f16cce,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
