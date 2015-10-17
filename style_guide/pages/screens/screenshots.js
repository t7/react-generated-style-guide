
var serverRoot = 'http://localhost:8080/#/'
var imageRoot = './build/style_guide/screens/shots/'

var viewportSizes = [
  {
    width: 1280
  }
]

var files = [
  '',
  'profile'
]
var index = 0

function shoot () {
  var file = files[index]
  if (!file && file !== '') {
    phantom.exit()
  }

  var page = require('webpage').create()
  page.viewportSize = {
    width: 1280,
    height: Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
  }

  page.open(serverRoot + file, function () {
    page.render(imageRoot + (file || 'index') + '.png')
    index++
    shoot()
  })
}

shoot()
