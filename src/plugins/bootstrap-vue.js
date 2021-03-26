import Vue from 'vue'

import { BootstrapVue , IconsPlugin, EmbedPlugin, ListGroupPlugin  } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import GlobalDirectives from './globalDirectives'
import GlobalComponents from './globalComponents';
import VueMq from 'vue-mq'


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(GlobalDirectives);
Vue.use(GlobalComponents);
Vue.use(EmbedPlugin);
Vue.use(ListGroupPlugin);
Vue.use(VueMq, {
   breakpoints : {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400,
      xxl: Infinity
   }
});

