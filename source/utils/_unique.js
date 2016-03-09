// Helper for returning a unique string.
function unique () {
  var x = new Date().getTime()
  x = x + '_'
  x = x + Math.random()
  x = x.replace('0.', '')

  return x
}

// Expose function.
export default unique
