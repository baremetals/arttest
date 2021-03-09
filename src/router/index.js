//Main Header
import Home from '@/views/Home.vue'
import Contests from '@/views/Contests.vue'
import Events from '@/views/Events.vue'
import Explore from '@/views/Explore.vue'
import Blogs from '@/views/Blogs.vue'
import Login from '@/auth/Login.vue'
import SignUp from '@/auth/SignUp.vue'

//Menu Routes
import UserProfile from '@/views/UserProfile.vue'
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
    // props: ['contestId']
  },
  // {
  //   path: '/contest-details',
  //   name: 'ContestDetails-Page',
  //   component: ContestDetails,
  //   props: true
  // },
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
  {
    path: '/auth-login',
    name: 'Login-Page',
    component: Login
  },
  {
    path: '/auth-signup',
    name: 'Signup-Page',
    component: SignUp
  },

  // Menu Routes
  {
    path: '/vote',
    name: 'Voting-Page',
    component: Voting
  },
  {
    path: '/user-profile',
    name: 'UserProfile-Page',
    component: UserProfile
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
