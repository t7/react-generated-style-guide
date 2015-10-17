var page = require('webpage').create()
page.open('http://localhost:8080/#/profile?_k=szuuf4', function (status) {
  console.log('Status: ' + status)
  if (status === 'success') {
    page.render('example.png')
  }
  phantom.exit()
})