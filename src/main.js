import '@babel/polyfill'
import 'mutationobserver-shim'

import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './assets/icons.js'
import { router } from './router'
import '@/assets/globalStyles.css'
import { store } from './store'
import Dayjs from 'vue-dayjs';
import VueSocialSharing from 'vue-social-sharing'
import VueCountdownTimer from 'vuejs-countdown-timer';
import { ValidationProvider } from 'vee-validate/dist/vee-validate';
import {ValidationObserver} from 'vee-validate'
import VeeValidate from 'vee-validate';

import VueJwtDecode from 'vue-jwt-decode'
import axios from 'axios';
import config from '@/config/config';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.config.productionTip = false

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


if (token) {
  const decodedToken = VueJwtDecode.decode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch('logOutUser');
    window.location.href = '/auth-signup';
  } else {
    store.dispatch('setAuthentication');
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    store.dispatch('getUserData');
  }
}

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
