import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import product from '../views/product.vue'
import profile from '../views/profile.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {

      if (store.state.authenticated == false) {

        next(false)

      } else {

        next()

      }

    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: profile,
    beforeEnter: (to, from, next) => {

      if (store.state.authenticated == false) {

        next(false)

      } else {

        next()

      }

    },
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
    
  },
 
  {
    path: '/',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/jewellery',
    name: 'Jewellery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Jewellery.vue'),
    beforeEnter: (to, from, next) => {

      if (store.state.authenticated == false) {

        next(false)

      } else {

        next()

      }

    },
  },  {
    path: '/electronics',
    name: 'Electronics',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Electronics.vue'),
    beforeEnter: (to, from, next) => {

      if (store.state.authenticated == false) {

        next(false)

      } else {

        next()

      }

    },
    
  },
  {
    path: '/mens',
    name: 'Mens',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mens.vue'),
    beforeEnter: (to, from, next) => {

      if (store.state.authenticated == false) {

        next(false)

      } else {

        next()

      }

    },
  },
  {
    path: '/womens',
    name: 'Womens',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Womens.vue'),
    beforeEnter: (to, from, next) => {

      if (store.state.authenticated == false) {

        next(false)

      } else {

        next()

      }

    },
   },
   {
    path: '/products',
    name: 'Products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue'),
    beforeEnter: (to, from, next) => {

      if (store.state.authenticated == false) {

        next(false)

      } else {

        next()

      }

    },
   },
   {
    path: "/product/:id",
    component: product,
    name: "product",
    props: true,
    beforeEnter: (to,from, next) => {

      if (store.state.authenticated == false) {

        next(false)

      } else {

        next()

      }

    },
  },

 

  


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
