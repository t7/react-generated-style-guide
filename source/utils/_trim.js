// Clean up strings.
export default function (str) {
  str = '' + str
  str = str.trim()
  str = str.replace(/\s+/g, ' ')

  return str
}
