import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './router'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './assets/icons.js'
import '@/assets/globalStyles.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Router,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  store,
  router: router
}).$mount('#app')
