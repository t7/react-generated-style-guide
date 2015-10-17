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
    page.viewportSize = {
      width: 1200,
      height: 1200
    }

    page.render(imageRoot + (file || 'accounts') + '_desktop.png')

    page.viewportSize = {
      width: 768,
      height: 1024
    }

    page.render(imageRoot + (file || 'accounts') + '_tablet.png')

    page.viewportSize = {
      width: 480,
      height: 800
    }

    page.render(imageRoot + (file || 'accounts') + '_mobile.png')

    index++
    shoot()
  })
}

shoot()
