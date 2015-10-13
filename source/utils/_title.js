// Set the page `<title>`.
export default function (path, titles) {
  // Fallback site title.
  const suffix = 'T7 Interactive Style Guide'

  // Grab pathname from `props.location`.
  path = path.split('/')[1]

  // Used in conditional.
  var title

  // Is there a pathname?
  if (path) {
    // Does a title exist?
    if (titles[path]) {
      title = titles[path] + ' | ' + suffix

    // If no title exists, 404.
    } else {
      title = titles['404'] + ' | ' + suffix
    }

  // If no path name.
  } else {
    title = suffix
  }

  // Set title.
  document.title = title
}
