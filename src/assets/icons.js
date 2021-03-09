import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faFacebookF, faTwitter, faTiktok, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

library.add(faUserSecret, faShareAlt, faFontAwesome, faFacebookF, faTwitter, faTiktok, faPinterestP, faHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('fa-icon', FontAwesomeIcon)