;(function () {
  var buttons = document.querySelectorAll('[data-code-trigger] button')

  Array.prototype.forEach.call(buttons, function (button) {
    button.onclick = function (e) {
      e.preventDefault()
      e.stopPropagation()

      var p = button.parentNode
      var id = p.getAttribute('data-code-trigger')
      var str = '[data-code-example="' + id + '"]'
      var pre = document.querySelector(str)
      var hidden = pre.style.display === 'none'

      var state = {
        true: {
          display: 'block',
          text: 'Hide Code'
        },
        false: {
          display: 'none',
          text: 'Show Code'
        }
      }

      button.innerHTML = state[hidden].text
      pre.style.display = state[hidden].display
    }
  })
})()
