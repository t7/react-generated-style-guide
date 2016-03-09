// Clean up strings.
function trim (str) {
  str = '' + str
  str = str.trim()
  str = str.replace(/\s+/g, ' ')

  return str
}

// Expose function.
export default trim
