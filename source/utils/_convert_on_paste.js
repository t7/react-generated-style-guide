/*
  You would call this when a user pastes from
  the clipboard into a `contenteditable` area.
*/

function convertOnPaste (e) {
  // Prevent paste.
  e.preventDefault()

  /*
    Used if the browser doesn't allow us
    to intercept the `on paste` event.
  */
  function fallback (e) {
    window.setTimeout(function () {
      const el = e.target

      var value
      value = el.innerText
      value = value.trim()
      value = value.replace(/\s+/g, ' ')

      el.innerText = value
    }, 16)
  }

  // Used in conditional.
  var value

  // For IE.
  if (window.clipboardData) {
    value = window.clipboardData.getData('text')
  } else {
    // Other browsers.
    value = e.clipboardData.getData('text/plain')
  }

  // No value?
  if (!value) {
    // Use fallback.
    fallback(e)

    // Exit.
    return
  }

  // Insert into temp `<textarea>`, read back out.
  const textarea = document.createElement('textarea')
  textarea.innerHTML = value
  value = textarea.innerText

  // Literal spaces.
  value = value.trim()
  value = value.replace(/[ ]+/g, ' ')

  // Mix of newlines, spaces.
  value = value.replace(/\n+\s+\n+/g, '\n\n')

  // Double newlines.
  value = value.replace(/\n\n+/g, '\n\n')

  // For IE.
  if (document.selection) {
    // For IE8.
    if (document.documentMode === 8) {
      value = value.replace(/\n/g, '<br>')
    }

    document.selection.createRange().pasteHTML(value)
  } else {
    // Other browsers.
    document.execCommand('insertText', false, value)
  }
}

// Expose function.
export default convertOnPaste
