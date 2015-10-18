/*
  NOTE: This file is evaluated inside
  of PhantomJS, so make sure to only
  use ECMAScript 5. No `const`, etc.
*/

// Get page height.
module.exports = function (page) {
  return page.evaluate(function () {
    var html = document.documentElement
    var body = document.body

    html.setAttribute('data-mode', 'phantom')

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )
  })
}
