/*global
  phantom
*/

// Dependencies.
const webpage = require('webpage')
const takeScreenshot = require('./helpers/take_screenshot')

// Options.
const options = require('./helpers/options')
const breakpoints = options.breakpoints
const imageRoot = options.imageRoot
const serverRoot = options.serverRoot

// Used in loop.
var index = 0

// Called repeatedly.
function shoot () {
  if (!options.paths[index]) {
    phantom.exit()
    return
  }

  const path = options.paths[index].path
  const file = options.paths[index].file

  // Create the page.
  const page = webpage.create()

  page.open(options.serverRoot + path, function () {
    breakpoints.forEach(function (x) {
      const breakpoint = x.breakpoint
      const width = x.width

      takeScreenshot({
        prefix: file,
        suffix: breakpoint,
        serverRoot: serverRoot,
        imageRoot: imageRoot,
        page: page,
        width: width
      })
    })

    // Close the page,
    // to free memory.
    page.close()

    // Keep looping through.
    index++
    shoot()
  })
}

// Initial call.
shoot()
