import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Orders from '@/components/Orders'
import Route from '@/components/Route'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/route',
      name: 'Route',
      component: Route
    }
  ]
})
