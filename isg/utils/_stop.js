// Helper to cancel events.
function stop (e) {
  e.preventDefault()
  e.stopPropagation()
}

// Expose function.
export default stop
