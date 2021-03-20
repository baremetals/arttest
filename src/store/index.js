import Vue from 'vue'
import Vuex from 'vuex'
import { blogs } from './modules/blogs/blogs'
import contests from './modules/contests/contest.module'
import { auth } from './modules/auth/auth'
import { uiModule }  from './modules/ui.module'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    uiModule,
    auth,
    blogs,
    contests,
    // events
  }
})
