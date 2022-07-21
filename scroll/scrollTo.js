// noinspection JSUnresolvedVariable

/**
 * @param {number} to
 * @param {number} duration
 * @param {Function} [callback]
 */
const scrollTo = (to, duration, callback) => {

  const position = () => document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop


  const start = position()
  const change = to - start
  const increment = 20
  let currentTime = 0
  duration = (typeof (duration) === 'undefined') ? 500 : duration


  Math.easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) {
      return c / 2 * t * t + b
    }
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
  }

  const move = amount => {
    document.documentElement.scrollTop = amount
    document.body.parentNode.scrollTop = amount
    document.body.scrollTop = amount
  }

  const requestAnimFrame = (() => window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )()

  const animateScroll = function () {
    currentTime += increment
    const val = Math.easeInOutQuad(currentTime, start, change, duration)
    move(val)
    if (currentTime < duration) {
      requestAnimFrame(animateScroll)
    } else {
      if (callback && typeof (callback) === 'function') {
        callback()
      }
    }
  }
  animateScroll()
}

module.exports = { scrollTo }
