// Helper for page navigation.
function navigate (path) {
  if (path === '/') {
    path = ''
  }

  window.location.hash = '/' + path
}

// Expose function.
export default navigate
