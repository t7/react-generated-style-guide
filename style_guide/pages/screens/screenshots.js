var Pageres = require('pageres')

new Pageres({delay: 2})
  .src('http://localhost:3000/#/?_k=geq2ddyh', ['480x320', '1024x768', 'iphone 5s'], {crop: true})
  .dest('build/style_guide/pages/screens/shots')
  .run(function () {
    console.log('DONE!')
  })
