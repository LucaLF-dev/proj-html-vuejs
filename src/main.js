import { createApp } from 'vue'

import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCirclePlay, faLocationDot, faPhone, faPlus, faRss, faUser, faUsers, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger, faSkype, faTwitter, faVimeo } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faPhone,faLocationDot,faFacebookMessenger,faTwitter,faVimeo,faSkype,faRss,faPlus,faUser,faUsers,faCirclePlay)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


/* 
<font-awesome-icon :icon="['fas', 'phone']" />
<font-awesome-icon :icon="['fas', 'location-dot']" /> 
<font-awesome-icon :icon="['fab', 'facebook-messenger']" />
<font-awesome-icon :icon="['fab', 'twitter']" />
<font-awesome-icon :icon="['fab', 'vimeo']" />
<font-awesome-icon :icon="['fab', 'skype']" />
<font-awesome-icon :icon="['fas', 'rss']" />
<font-awesome-icon :icon="['fas', 'plus']" />

*/