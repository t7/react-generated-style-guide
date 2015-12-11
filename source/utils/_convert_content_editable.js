// Utility methods.
import utils from './index'

export default function (e) {
  const el = e.target

  // Check <tag> name.
  const tag_name = el.tagName.toLowerCase()
  const is_span = tag_name === 'span'
  const is_div = tag_name === 'div'

  // Get placeholder.
  var placeholder = el.getAttribute('placeholder')
  placeholder = placeholder.trim()
  placeholder = placeholder.replace(/\s+/g, ' ')

  // Used in conditional.
  var value

  if (is_span) {
    value = el.innerText
    value = value.trim()
    value = value.replace(/\s+/g, ' ')
  } else if (is_div) {
    value = el.innerHTML
    value = value.trim()
    value = utils.convertToText(value)
  }

  // Check event and key.
  const is_blur = e.type === 'blur'
  const is_enter = e.keyCode === 13

  // Flag for replacement.
  const do_replace_inline = is_span && (is_blur || is_enter)
  const do_replace_block = is_div && is_blur

  // Use placeholder, if no value.
  value = value || placeholder

  // Replace, if need be.
  if (do_replace_inline) {
    el.innerHTML = value
  } else if (do_replace_block) {
    value = utils.convertToMarkup(value)

    el.innerHTML = value
  }
}
