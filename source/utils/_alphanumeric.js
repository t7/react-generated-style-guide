// Validate alphanumeric.
function alphanumeric (value) {
  return typeof value === 'string' || !isNaN(value)
}

// Expose function.
export default alphanumeric
