import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faVk, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faQuoteRight, faQuoteLeft} from '@fortawesome/free-solid-svg-icons'

library.add(faVk, faTelegram, faEnvelope, faQuoteRight, faQuoteLeft)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
