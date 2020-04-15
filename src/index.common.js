import VuePlugin from './vue-plugin.js'

import * as directives from './directives.js'

export default {
  // for when importing all
  ...VuePlugin,
  install (Vue, opts) {
    VuePlugin.install(Vue, {
      directives,
      ...opts
    })
  },

  // for when cherry-picking
  Quasar: VuePlugin,

  ...directives,
}
