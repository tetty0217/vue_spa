import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Product from '../views/Product'
import ProductList from '../views/ProductList'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product',
      component: ProductList
    },
    {
      path: '/product/:id',
      component: Product,
      props: route => ({
        id: Number(route.params.id)
      })
    }
  ]
})
export default router
