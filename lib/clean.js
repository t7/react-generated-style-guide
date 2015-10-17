const trash = require('trash')

trash(['./build']).then(() => {
  console.log('done')
})
