;(function (window) {
  'use strict'

  // Polyfill `Intl` for Safari.
  if (typeof window.Intl !== 'object') {
    window.document.write(
      [
        '<',
        'script',
        ' ',
        'src="',
        'https://',
        'cdn.polyfill.io',
        '/v1/polyfill.min.js',
        '?features=Intl.~locale.en',
        '"',
        '></',
        'script',
        '>'
      ].join('')
    )
  }
})(this)
