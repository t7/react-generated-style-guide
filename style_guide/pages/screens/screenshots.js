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
      height: 800
    }

    page.render(imageRoot + (file || 'accounts') + '_large.png')

    page.viewportSize = {
      width: 768,
      height: 800
    }

    page.render(imageRoot + (file || 'accounts') + '_medium.png')

    page.viewportSize = {
      width: 480,
      height: 800
    }

    page.render(imageRoot + (file || 'accounts') + '_small.png')

    index++
    shoot()
  })
}

shoot()
