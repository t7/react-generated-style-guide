// Helper for console.log
function log () {
  const localhost = window.location.hostname === 'localhost'
  const isValid = localhost && window.console && window.console.log

  if (isValid) {
    Array.prototype.forEach.call(arguments, function (x) {
      window.console.log(x)
    })
  }
}

// Expose function.
export default log
