var glob = require('glob')
var Pageres = require('pageres')

var pages = [
  'http://localhost:8080/',
  'http://localhost:8080/#/404'
]
var currentPageRes
var numOfPages = pages.length

console.log(numOfPages + ' pages to generate screenshots.')
function run (page_index) {
  var url = pages[page_index].replace('dist/html', 'http://localhost:3000/html')
  process.stdout.write('Starting screenshot of ' + url + '......\r')
  currentPageRes = new Pageres({delay: 1})
    .src(url, ['1366x768', 'ipad 3', 'iphone 5s'])
    .dest('dist/screenshots')
    .run(function (err) {
      if (err) {
        console.log(err)
      }
      console.log('Page (' + (page_index + 1) + ') ' + url + '    ........... Done!          ')
      page_index = page_index + 1
      if (pages[page_index]) {
        setTimeout(function () {
          currentPageRes = null
          run(page_index)
        }, 50)
      }
    })
}

run(0)