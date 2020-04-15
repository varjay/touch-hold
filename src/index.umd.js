import Vue from 'vue'

import install from './install.js'
import { version } from '../package.json'

import * as directives from './directives.js'

Vue.use({ install }, {
  directives,
  config: window.quasarConfig || {}
})

export default {
  version,
  directives,
  ...directives,
}
