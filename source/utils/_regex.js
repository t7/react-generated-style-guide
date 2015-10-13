// Helper for regular expressions.
export default function (x) {
  // Escape the string.
  function esc (str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
  }

  // Used later.
  var arr
  var i
  var value

  // Is it an array?
  var isArray = typeof x === 'object' && x.length

  // Is it an array?
  if (isArray) {
    arr = []
    i = x.length

    while (i--) {
      arr.push(esc(x[i]))
    }

    arr = arr.reverse()
    arr = arr.join('|')

    value = new RegExp(arr, 'g')
  } else {
    // Assume individual string.
    value = new RegExp(esc(x), 'g')
  }

  // Expose value.
  return value
}
