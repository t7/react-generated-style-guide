/*global
  phantom
*/

var serverRoot = 'http://localhost:8080/#/'
var imageRoot = './build/style_guide/screens/shots/'

var files = [
  '',
  'profile',
  'page_not_found'
]

// Used in loop.
var index = 0

// Get page height.
function getPageHeight (page) {
  return page.evaluate(function () {
    var html = document.documentElement
    var body = document.body

    html.setAttribute('data-mode', 'phantom')

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )
  })
}

function takeScreenshot () {
  var file = files[index]

  if (!file && file !== '') {
    phantom.exit()
    return
  }

  var page = require('webpage').create()

  page.open(serverRoot + file, function () {
    // ========
    // DESKTOP.
    // ========

    page.viewportSize = {
      width: 1200,
      height: 5
    }

    page.viewportSize = {
      width: 1200,
      height: getPageHeight(page)
    }

    page.render(imageRoot + (file || 'accounts') + '_desktop.png')

    // =======
    // TABLET.
    // =======

    page.viewportSize = {
      width: 768,
      height: 5
    }

    page.viewportSize = {
      width: 768,
      height: getPageHeight(page)
    }

    page.render(imageRoot + (file || 'accounts') + '_tablet.png')

    // =======
    // MOBILE.
    // =======

    page.viewportSize = {
      width: 480,
      height: 5
    }

    page.viewportSize = {
      width: 480,
      height: getPageHeight(page)
    }

    page.render(imageRoot + (file || 'accounts') + '_mobile.png')

    // Keep looping through.
    index++
    takeScreenshot()
  })
}

takeScreenshot()
