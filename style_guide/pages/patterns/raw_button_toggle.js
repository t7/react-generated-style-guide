;(function () {
  // Build string.
  var selector = [
    '[data-trigger-jsx] button',
    '[data-trigger-html] button'
  ].join(',')

  // Get buttons.
  var buttons = document.querySelectorAll(selector)

  // Loop through the buttons.
  Array.prototype.forEach.call(buttons, function (button) {
    // Get the parent, attribute.
    var p = button.parentNode
    var is_html = p.getAttribute('data-trigger-html')

    // Set in conditional.
    var id

    // Which mode?
    if (is_html) {
      id = is_html
    } else {
      id = p.getAttribute('data-trigger-jsx')
    }

    var button_html =
    document.querySelector('[data-trigger-html="' + id + '"] button')

    var button_jsx =
    document.querySelector('[data-trigger-jsx="' + id + '"] button')

    var pre_html =
    document.querySelector('[data-example-html="' + id + '"]')

    var pre_jsx =
    document.querySelector('[data-example-jsx="' + id + '"]')

    // Handle button clicks.
    button.onclick = function (e) {
      e.preventDefault()
      e.stopPropagation()

      // HTML code button?
      if (is_html) {
        // Hide JSX.
        pre_jsx.style.display = 'none'

        // Is HTML hidden?
        if (pre_html.style.display === 'none') {
          // Show HTML.
          pre_html.style.display = 'block'

          // Disable JSX button.
          button_jsx.disabled = true

        // Is HTML visible?
        } else {
          // Hide HTML.
          pre_html.style.display = 'none'

          // Enable JSX button.
          button_jsx.disabled = false
        }

      // JSX code button?
      } else {
        // Hide HTML.
        pre_html.style.display = 'none'

        // Is JSX hidden?
        if (pre_jsx.style.display === 'none') {
          // Show JSX.
          pre_jsx.style.display = 'block'

          // Disable HTML button.
          button_html.disabled = true

        // Is JSX visible?
        } else {
          // Hide JSX.
          pre_jsx.style.display = 'none'

          // Enable HTML button.
          button_html.disabled = false
        }
      }
    }
  })
})()
