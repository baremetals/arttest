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
import Dayjs from 'vue-dayjs';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(require('vue-moment'));
Vue.use(Dayjs, {
  filters: {
    ago: 'ago',
    
  },
  directives: {
    countdown: 'countdown',
  }
})




const router = new VueRouter({
  routes: Router,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  document.title = `Arrtest - ${to.name}`
  next();
});

new Vue({
  render: h => h(App),
  store,
  router: router
}).$mount('#app')
