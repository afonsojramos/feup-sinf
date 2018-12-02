import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import ClientOrders from '@/components/OrdersClient'
import SupplierOrders from '@/components/OrdersSupplier'
import Route from '@/components/Route'
import Http404 from '@/components/Http404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage
    },
    {
      path: '/client/orders',
      name: 'Client Orders',
      component: ClientOrders
    },
    {
      path: '/supplier/orders',
      name: 'Supplier Orders',
      component: SupplierOrders
    },
    {
      path: '/route',
      name: 'Route',
      component: Route
    },
    {
      path: '**',
      name: 'Http404',
      component: Http404
    }
  ]
})
