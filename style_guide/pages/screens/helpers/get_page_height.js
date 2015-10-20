/*
  NOTE: This file is evaluated inside
  of PhantomJS, so make sure to only
  use ECMAScript 5. No `const`, etc.
*/

// Get page height.
module.exports = function (page) {
  return page.evaluate(function () {
    'use strict'

    var html = document.documentElement
    var body = document.body

    // Set flag for "phantom" mode.
    html.setAttribute('data-mode', 'phantom')

    // Get page width.
    function getWidth () {
      return Math.max(
        body.scrollWidth,
        body.offsetWidth,
        html.clientWidth,
        html.scrollWidth,
        html.offsetWidth
      )
    }

    // Get page height.
    function getHeight () {
      return Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
    }

    // Get page dimensions.
    var width = getWidth()
    var height = getHeight()

    // Convert object to style.
    function toStyle (o) {
      var k
      var str
      var arr = []

      for (k in o) {
        if (o.hasOwnProperty(k)) {
          str = [
            k,
            o[k]
          ].join(':')

          arr.push(str)
        }
      }

      return arr.join(';')
    }

    // Style for banner.
    var style = toStyle({
      'background': '#000',
      'border-bottom': '1px solid #fff',
      'color': '#fff',
      'font-family': 'Arial, sans-serif',
      'font-size': '30px',
      'font-weight': 'bold',
      'overflow': 'hidden',
      'padding': '10px',
      'text-align': 'center',
      'white-space': 'nowrap'
    })

    // ID of insertion point.
    var id = '_phantom_banner_'

    // Check for existing banner.
    var banner = document.getElementById(id)

    // If no banner, create it.
    if (!banner) {
      banner = document.createElement('div')
      banner.id = id
      banner.style.cssText = style
    }

    // Show the banner, in case it existed in the
    // page already, but was hidden by site's CSS.
    banner.style.display = 'block'

    // Insert measurements.
    banner.innerHTML = width + ' &times; ' + height

    // Add banner to the page.
    body.insertBefore(banner, body.childNodes[0])

    // Recalculate page height,
    // after banner was added.
    return getHeight()
  })
}
