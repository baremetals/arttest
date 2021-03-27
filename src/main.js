import '@babel/polyfill'
// import _Quill from 'quill'
import 'mutationobserver-shim'
import VueRouter from 'vue-router'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './assets/icons.js'
import Router from './router'
import '@/assets/globalStyles.css'
import store from './store'
import Dayjs from 'vue-dayjs';
import VueSocialSharing from 'vue-social-sharing'
import VueCountdownTimer from 'vuejs-countdown-timer';
import { ValidationProvider } from 'vee-validate/dist/vee-validate';
import {ValidationObserver} from 'vee-validate'
import VeeValidate from 'vee-validate';

import VueJwtDecode from 'vue-jwt-decode'
// import { SET_AUTHENTICATED } from './store/MutationTypes'
import axios from 'axios';
import config from '@/config/config';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VeeValidate, {
  inject: false,
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});
Vue.use(VueSocialSharing, {
  networks: {
    fakeblock: 'https://fakeblock.com/share?url=@url&title=@title'
  }
});
Vue.use(require('vue-moment'));
Vue.use(Dayjs, {
  filters: {
    ago: 'ago',
    
  },
  directives: {
    countdown: 'countdown',
  }
})
Vue.use(VueCountdownTimer)

axios.defaults.baseURL = `${config.prodUrlEndpoint}`
const token = localStorage.FBIdToken;
// axios.defaults.headers.common['Authorization'] = "Bearer " + FBIdToken;;

if (token) {
  const decodedToken = VueJwtDecode.decode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch('logOutUser');
    window.location.href = '/auth-signup';
    // this.$router.push('/auth-signup') ;
  } else {
    store.dispatch('setAuthentication');
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    store.dispatch('getUserData');
  }
}

const router = new VueRouter({
  routes: Router,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = `Arrtest - ${to.name}`
  // if (to.matched.some(record => record.meta.requiresAuth)){
  //   if (store.state.authenticated) {
  //     next({ path: '/creator-profile'})
  //   } else {
  //     next({ path: '/auth-signup'})
  //   }
  // } else {
  //   next()
  // }
  next();
});

new Vue({
  render: h => h(App),
  store,
  router: router
}).$mount('#app')
