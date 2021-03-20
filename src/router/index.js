//Main Header
import Home from '@/views/Home.vue'
import Contests from '@/views/Contests.vue'
import ContestDetails from '@/views/ContestDetails.vue'
import Events from '@/views/Events.vue'
import Explore from '@/views/Explore.vue'
import Blogs from '@/views/Blogs.vue'

// Auth Routes
import SignUp from '@/auth/SignUp.vue'
import ForgotPassword from '@/auth/ForgotPassword.vue'
import ResetPassword from '@/auth/ResetPassword.vue'

//Menu Routes
import CreatorProfile from '@/views/CreatorProfile.vue'
import Voting from '@/views/Voting.vue'

//Footer
import About from '@/views/About.vue'
import ContactUs from '@/views/ContactUs.vue'
import Privacy from '@/views/Privacy.vue'
import Terms from '@/views/Terms.vue'


const routes = [
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
    name: 'UserProfile-Page',
    component: CreatorProfile,
    meta: {
      requiresAuth: true
    }
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
]


export default routes