export const listenOpts = {
  hasPassive: false,
  passiveCapture: true,
  notPassiveCapture: true
}

try {
  var opts = Object.defineProperty({}, 'passive', {
    get () {
      Object.assign(listenOpts, {
        hasPassive: true,
        passive: { passive: true },
        notPassive: { passive: false },
        passiveCapture: { passive: true, capture: true },
        notPassiveCapture: { passive: false, capture: true }
      })
    }
  })
  window.addEventListener('qtest', null, opts)
  window.removeEventListener('qtest', null, opts)
}
catch (e) {}

export function noop () {}

export function leftClick (e) {
  return e.button === 0
}

export function position (e) {
  if (e.touches && e.touches[0]) {
    e = e.touches[0]
  }
  else if (e.changedTouches && e.changedTouches[0]) {
    e = e.changedTouches[0]
  }
  else if (e.targetTouches && e.targetTouches[0]) {
    e = e.targetTouches[0]
  }

  return {
    top: e.clientY,
    left: e.clientX
  }
}

export function stopAndPrevent (e) {
  e.cancelable !== false && e.preventDefault()
  e.stopPropagation()
}

/*
 * also update /types/utils/event.d.ts
 */

export default {
  listenOpts,
  leftClick,
  position,
  stopAndPrevent,
}
