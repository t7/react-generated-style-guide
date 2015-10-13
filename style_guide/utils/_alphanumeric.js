// Validate alphanumeric.
export default function (value) {
  return typeof value === 'string' || !isNaN(value)
}
