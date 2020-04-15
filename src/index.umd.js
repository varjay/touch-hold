import Vue from 'vue'
import TouchHold from './directives/TouchHold.js'
import { version } from '../package.json'

Vue.use({ install: function() {
  Vue.directive('touch-hold', TouchHold)
} })

export default {
  version,
}
