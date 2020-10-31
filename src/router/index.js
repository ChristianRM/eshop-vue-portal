import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SearchItems from '../views/SearchItems.vue'
import FAQ from '../views/FAQ.vue'
import ReturnPolicy from '../views/ReturnPolicy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/search',
    name: 'SearchItems',
    component: SearchItems
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/returns',
    name: 'ReturnPolicy',
    component: ReturnPolicy
  }
]

const router = new VueRouter({
  routes
})

export default router
