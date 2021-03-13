import Vue from 'vue'
import Vuex from 'vuex'
import blogs from './modules/blogs/blogs.module'
import contests from './modules/contests/contest.module'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // auth,
    blogs,
    contests,
    // events
  }
})
