import TouchHold from './directives/TouchHold.js'

export default {
  install (Vue) {
    Vue.directive('touch-hold', TouchHold)
  },
}
