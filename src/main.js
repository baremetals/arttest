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
import VueSocialSharing from 'vue-social-sharing'
import VueCountdownTimer from 'vuejs-countdown-timer';
import { ValidationProvider } from 'vee-validate/dist/vee-validate';
import {ValidationObserver} from 'vee-validate'
import VeeValidate from 'vee-validate';
// import VueJwtDecode from 'vue-jwt-decode'
// import { SET_AUTHENTICATED, LOGOUT_USER, GET_USER_DATA } from './store/MutationTypes'
// import axios from 'axios';
// import config from '@/config/config';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.config.productionTip = false
Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});
Vue.use(VueRouter)
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


// axios.defaults.baseURL = `${config.prodUrlEndpoint}`
// const token = localStorage.FBIdToken;
// axios.defaults.headers.common['Authorization'] = token;
// const token = localStorage.FBIdToken;
// if (token) {
//   const decodedToken = VueJwtDecode.decode(token);
//   if (decodedToken.exp * 1000 < Date.now()) {
//     store.dispatch(LOGOUT_USER);
//     window.location.href = '/auth-login';
//   } else {
//     store.dispatch(SET_AUTHENTICATED );
//     axios.defaults.headers.common['Authorization'] = token;
//     store.dispatch(GET_USER_DATA);
//   }
// }


const router = new VueRouter({
  routes: Router,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  document.title = `Arrtest - ${to.name}`
  // if (to.matched.some(record => record.meta.requiresAuth)){
  //   if (!store.state.authenticated) {
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
