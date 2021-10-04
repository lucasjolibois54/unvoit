import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'

//Dashboard Area
import Dashboard from '../views/Dashboard.vue'
import Statistics from '../views/Statistics.vue'
import Upload from '../views/Upload.vue'
import InvoicePage from '../views/InvoicePage.vue';


import HelpCenter from '../views/HelpCenter.vue';
import Support from '../views/Support.vue'
import firebase from 'firebase/app';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/Signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/Statistics',
    name: 'Statistics',
    component: Statistics,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: "/invoice/:invoiceId",
    name: 'Invoice',
    component: InvoicePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/HelpCenter',
    name: 'HelpCenter',
    component: HelpCenter,
  },
  {
    path: '/Support',
    name: 'Support',
    component: Support,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

router.beforeEach(( to, from, next) => {
  const authenticatedUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && ! authenticatedUser) next('signin')
  else next()
});

export default router
