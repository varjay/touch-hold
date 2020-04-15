import VuePlugin from './vue-plugin.js'

import * as directives from './directives.js'

export * from './directives.js'

export default {
  ...VuePlugin,
  install (Vue, opts) {
    VuePlugin.install(Vue, {
      directives,
      ...opts
    })
  }
}
