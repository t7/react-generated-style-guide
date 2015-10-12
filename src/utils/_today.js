// Returns 1 day, in milliseconds.
export default function (offset) {
  const isValid = !isNaN(offset)

  var day = new Date().getTime()

  if (isValid) {
    day = day + (offset * 86400000)
  }

  return day
}
