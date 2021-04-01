import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../store'
Vue.use(Router)

//Main Header
import Home from '@/views/Home.vue'
import Contests from '@/views/Contests.vue'
import ContestDetails from '@/views/ContestDetails.vue'
import Events from '@/views/Events.vue'
import Explore from '@/views/Explore.vue'
import Blogs from '@/views/Blogs.vue'

// Auth Routes
import SignUp from '@/auth/SignUp.vue'
// import SignOut from '@/auth/SignOut.vue'
import ForgotPassword from '@/auth/ForgotPassword.vue'
import ResetPassword from '@/auth/ResetPassword.vue'

//Menu Routes
import CreatorProfile from '@/views/CreatorProfile.vue'
import CompanyProfile from '@/views/CompanyProfile.vue'
import Voting from '@/views/Voting.vue'
import ContestEntry from '@/views/ContestEntry.vue'
import ResCompanyProfile from '@/views/ResCompanyProfile.vue'
import CompanyProfile2 from '@/views/CompanyProfile2.vue'
import ResCreatorProfile from '@/views/ResCreatorProfile.vue'
import UserInbox from '@/components/UserInbox.vue'

import UserSetting from '@/components/UserSetting.vue'
// import NotFound from '@/views/NotFoundPage.vue'
import StaticUserProfile from '@/views/StaticUserProfile.vue'
import StaticBrandProfile from '@/views/StaticBrandProfile.vue'

//Footer
import About from '@/views/About.vue'
import ContactUs from '@/views/ContactUs.vue'
import Privacy from '@/views/Privacy.vue'
import Terms from '@/views/Terms.vue'

export const router = new Router({
  mode: 'history',
  routes: [
    //Main Header Routes
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contests',
      name: 'Contests-Page',
      component: Contests,
    },
    {
      path: '/contests/:contestId',
      name: 'ContestDetails-Page',
      component: ContestDetails,
      props: true,
    },
    {
      path: '/contest-entry',
      name: 'ContestEntryForm',
      component: ContestEntry
    },
    {
      path: '/events',
      name: 'Events-Page',
      component: Events
    },
    {
      path: '/explore',
      name: 'Explore-Page',
      component: Explore
    },
    {
      path: '/blogs',
      name: 'Blogs-Page',
      component: Blogs
    },

    //auth
    {
      path: '/auth-signup',
      name: 'Signup-Page',
      component: SignUp
    },
    // {
    //   path: '/auth-signout',
    //   name: 'SignOut-Page',
    //   component: SignOut
    // },
    {
      path: '/auth-resetpassword/:token',
      name: 'Reset-Password-Page',
      component: ResetPassword
    },
    {
      path: '/auth-forgotpassword',
      name: 'Forgot-Password-Page',
      component: ForgotPassword
    },

    // Menu Routes
    {
      path: '/vote',
      name: 'Voting-Page',
      component: Voting
    },
    {
      path: '/creator-profile',
      name: 'CreatorProfile-Page',
      component: CreatorProfile,
      secure: true
    },
    {
      path: '/user-profile',
      name: 'UserProfile-Page',
      component: StaticUserProfile,
      meta: {
        
      }
    },
    {
      path: '/company-profile',
      name: 'Static-Brand-Profile',
      component: StaticBrandProfile,
      meta: {
        
      }
    },
    {
      path: '/company',
      name: 'CompanyProfile-Page',
      component: CompanyProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/res-company',
      name: 'Rcompany',
      component: ResCompanyProfile
    },
    {
      path: '/res-creator',
      name: 'Rcreator',
      component: ResCreatorProfile
    },
    {
      path: '/company2',
      name: 'CompanyProfile2',
      component: CompanyProfile2
    },
    {
      path: '/inbox',
      name: 'Inbox',
      component: UserInbox
    },
    
    
    {
      path: '/support',
      name: 'Support',
      component: UserSetting
    },

    //Footer Routes
    {
      path: '/contact-us',
      name: 'Contact-Us',
      component: ContactUs
    },
    {
      path: '/about',
      name: 'About-Page',
      component: About
    },
    {
      path: '/privacy',
      name: 'Privacy-Page',
      component: Privacy
    },
    {
      path: '/terms',
      name: 'Terms-Page',
      component: Terms
    },
    // { path: '*', component: NotFound }
  ]
})



router.beforeEach((to, from, next) => {
  document.title = `Arrtest - ${to.name}`
  const loggedIn = store.state.authModule.authenticated
  router.options.routes.forEach((route) => {
    if (!loggedIn && route.secure && to.name === route.name) {
      return next('/auth-signup')
    } else {
      next()
    }
  })
})

export default router
