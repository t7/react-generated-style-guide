// Dependencies.
const getPageHeight = require('./get_page_height')

// Take screenshot at a breakpoint.
module.exports = function (o) {
  const prefix = o.prefix
  const suffix = o.suffix
  const page = o.page
  const width = o.width
  const imageRoot = o.imageRoot

  page.viewportSize = {
    width: width,
    height: 5
  }

  page.viewportSize = {
    width: width,
    height: getPageHeight(page)
  }

  page.render(imageRoot + prefix + '_' + suffix + '.png')
}
