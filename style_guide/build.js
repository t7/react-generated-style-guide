// Require (and run) each "build.js" file.

var pages = [
  './pages/branding/build.js',
  './pages/intro/build.js',
  './pages/patterns/build.js',
  './pages/requirements/build.js',
  './pages/templates/build.js'
]

pages.forEach(function (path) {
  var build = require(path)
  build()
})
