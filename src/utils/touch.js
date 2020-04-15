import { listenOpts } from './event.js'

let isSSR = false
let isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
let iosEmulated = isIOS && window.navigator.vendor.toLowerCase().indexOf('apple') === -1
export function addEvt (ctx, target, events) {
  target += 'Evt'

  ctx[target] = ctx[target] !== void 0
    ? ctx[target].concat(events)
    : events

  events.forEach(evt => {
    evt[0].addEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]])
  })
}

export function cleanEvt (ctx, target) {
  target += 'Evt'

  if (ctx[target] !== void 0) {
    ctx[target].forEach(evt => {
      evt[0].removeEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]])
    })
    ctx[target] = void 0
  }
}

export const getTouchTarget = isSSR === false && iosEmulated !== true && (
  isIOS === true ||
  window.navigator.vendor.toLowerCase().indexOf('apple') > -1
)
  ? () => document
  : target => target
