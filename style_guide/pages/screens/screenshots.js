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

var index = 0

function shoot () {
  var file = files[index]

  if (!file && file !== '') {
    phantom.exit()
  }

  var page = require('webpage').create()

  page.open(serverRoot + file, function () {
    var html = document.documentElement
    var body = document.body

    html.setAttribute('data-mode', 'phantom')

    // Get tallest.
    function max () {
      return Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
    }

    // Called from setTimeout.
    function kickoff () {
      // ========
      // DESKTOP.
      // ========

      page.viewportSize = {
        width: 1200,
        height: max()
      }

      page.render(imageRoot + (file || 'accounts') + '_desktop.png')

      // =======
      // TABLET.
      // =======

      page.viewportSize = {
        width: 768,
        height: max()
      }

      page.render(imageRoot + (file || 'accounts') + '_tablet.png')

      // =======
      // MOBILE.
      // =======

      page.viewportSize = {
        width: 480,
        height: max()
      }

      page.render(imageRoot + (file || 'accounts') + '_mobile.png')
    }

    // Set delay, for CSS to kick in.
    var timer = setTimeout(function () {
      clearTimeout(timer)
      kickoff()
    }, 500)

    index++
    shoot()
  })
}

shoot()
