var page = require('webpage').create()
page.open('http://localhost:3000/#/?_k=geq2ddyh', function (status) {
  console.log('Status: ' + status)
  if (status === 'success') {
    page.render('example.png')
  }
  phantom.exit()
})
