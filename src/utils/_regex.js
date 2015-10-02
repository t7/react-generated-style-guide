// Helper for regular expressions.
export default function (x) {
  // Escape the string.
  function esc (str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
  }

  // Used in loop.
  var arr
  var i

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

    return new RegExp(arr, 'g')
  }
  // Assume individual string.
  else {
    return new RegExp(esc(x), 'g')
  }
}
