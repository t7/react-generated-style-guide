/*
  This method allows you to save data as a `console.json`
  file, when perusing a large JSON object via console.log
  would be too time consuming and/or laborious. Enjoy! :)
*/
function save (data, filename) {
  // File blob.
  const Blob = window.Blob

  // For comparison.
  const f = 'function'
  const o = 'object'

  /*
    Check to ensure we're not overwriting
    a future, native console.save method.

    Also, ensure all of the featuers are
    available to actually create a file.
  */
  const bool = typeof Blob === f &&
    typeof window.URL === f &&
    typeof document.createEvent === f

  // If unsupported, exit.
  if (!bool) {
    return
  }

  // If no data, throw an error.
  if (!data) {
    throw new Error('utils.save: NO DATA')
  }

  // Default filename.
  if (!filename) {
    filename = 'console.json'
  }

  // Format nicely.
  if (typeof data === o) {
    data = JSON.stringify(data, undefined, 2)
  }

  const type = 'text/json'
  const blob = new Blob([data], {type: type})
  const e = document.createEvent('MouseEvents')
  const a = document.createElement('a')

  e.initMouseEvent(
    'click',
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  )

  a.download = filename
  a.href = window.URL.createObjectURL(blob)
  a.dataset.downloadurl = [type, a.download, a.href].join(':')
  a.dispatchEvent(e)
}

// Expose function.
export default save
