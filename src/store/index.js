import Vue from 'vue'
import Vuex from 'vuex'
import { blogsModule } from './modules/blogs/blogs.module'
import { eventModule } from './modules/events/event.module'
import { contestModule } from './modules/contests/contest.module'
import { entryModule } from './modules/contests/entry.module'
import { authModule } from './modules/auth/auth.module'
import { usersModule } from './modules/users/users.module'
import { uiModule }  from './modules/ui.module'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    uiModule,
    authModule,
    blogsModule,
    contestModule,
    eventModule,
    usersModule,
    entryModule
  }
})
