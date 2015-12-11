/*
  Parses all inputs in a `<form>`,
  and returns a formatted object.
*/

// Dependencies.
import _ from 'lodash'
import utils from '../utils'

export default function (form) {
  // Get the key/values.
  const str = 'input, select, textarea, [contenteditable="true"]'
  const list = form.querySelectorAll(str)

  // Build in a loop.
  const data = []

  // Loop through.
  _.each(list, function (el) {
    const name = el.getAttribute('name')
    const type = el.type
    const isTextdiv = el.getAttribute('contenteditable')

    var value

    // If it's a Textdiv, treat differently.
    if (isTextdiv) {
      value = utils.convertToText(el.innerHTML)

    // Else, typical form element.
    } else {
      value = el.value
    }

    const item = {
      name: name,
      value: value
    }

    // Pass `checked`?
    if (type === 'radio' || type === 'checkbox') {
      item.checked = el.checked
    }

    // Add to data.
    data.push(item)
  })

  // Send back object.
  return data
}
