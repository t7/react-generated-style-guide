/*
  You would call this after getting an element's
  `.innerHTML` value, while the user is typing.
*/

function convertToText (value) {
  // Convert `&amp` to `&`.
  value = value.replace(/&amp/gi, '&')

  // Replace spaces.
  value = value.replace(/&nbsp/gi, ' ')
  value = value.replace(/\s+/g, ' ')

  // Remove "<b>".
  value = value.replace(/<b>/gi, '')
  value = value.replace(/<\/b>/gi, '')

  // Remove "<strong>".
  value = value.replace(/<strong>/gi, '')
  value = value.replace(/<\/strong>/gi, '')

  // Remove "<i>".
  value = value.replace(/<i>/gi, '')
  value = value.replace(/<\/i>/gi, '')

  // Remove "<em>".
  value = value.replace(/<em>/gi, '')
  value = value.replace(/<\/em>/gi, '')

  // Remove "<u>".
  value = value.replace(/<u>/gi, '')
  value = value.replace(/<\/u>/gi, '')

  // Tighten up "<" and ">".
  value = value.replace(/>\s+/g, '>')
  value = value.replace(/\s+</g, '<')

  // Replace "<br>".
  value = value.replace(/<br>/gi, '\n')

  // Replace "<div>" (from Chrome).
  value = value.replace(/<div>/gi, '\n')
  value = value.replace(/<\/div>/gi, '')

  // Replace "<p>" (from IE).
  value = value.replace(/<p>/gi, '\n')
  value = value.replace(/<\/p>/gi, '')

  // No more than 2x newline, per "paragraph".
  value = value.replace(/\n\n+/g, '\n\n')

  // Whitespace before/after.
  value = value.trim()

  return value
}

// Expose function.
export default convertToText
