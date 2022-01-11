import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Index'
import Login from '@/views/Login'
import Transactions from '@/views/Transactions'
import Register from '@/views/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: Transactions
    },

  ],
  mode: "history"
})
