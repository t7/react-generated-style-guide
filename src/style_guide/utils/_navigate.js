// Helper for page navigation.
export default function (path) {
  if (path === '/') {
    path = ''
  }

  window.location.hash = '/' + path
}
