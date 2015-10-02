// Helper to cancel events.
export default function (e) {
  e.preventDefault()
  e.stopPropagation()
}
