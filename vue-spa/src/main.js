import Vue from 'vue'
import App from './App'
import router from './router.js'
import store from './store/product'

Vue.config.productionTip = false

console.log(store)
console.log(router)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
