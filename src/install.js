import { version } from '../package.json'

export const queues = {
  server: [], // on SSR update
  takeover: [] // on client takeover
}

export const $q = {
  version,
  config: {}
}

export default function (Vue, opts = {}) {
  if (this.__qInstalled === true) { return }
  this.__qInstalled = true

  const cfg = $q.config = Object.freeze(opts.config || {})

  Vue.prototype.$q = $q

  opts.components && Object.keys(opts.components).forEach(key => {
    const c = opts.components[key]
    if (typeof c === 'function') {
      Vue.component(c.options.name, c)
    }
  })

  opts.directives && Object.keys(opts.directives).forEach(key => {
    const d = opts.directives[key]
    if (d.name !== undefined && d.unbind !== void 0) {
      Vue.directive(d.name, d)
    }
  })

  if (opts.plugins) {
    const param = { $q, queues, cfg }
    Object.keys(opts.plugins).forEach(key => {
      const p = opts.plugins[key]
      if (typeof p.install === 'function') {
        p.install(param)
      }
    })
  }
}
