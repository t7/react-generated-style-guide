module.exports = {
  serverRoot: 'http://localhost:8080/#/',
  imageRoot: './build/style_guide/screens/shots/',

  // Page paths and names.
  paths: [
    {
      path: '',
      file: 'accounts'
    },
    {
      path: 'profile',
      file: 'profile'
    },
    {
      path: 'page_not_found',
      file: 'page_not_found'
    }
  ],

  // Breakpoint widths and names.
  breakpoints: [
    {
      breakpoint: 'desktop',
      width: 1200
    },
    {
      breakpoint: 'tablet',
      width: 768
    },
    {
      breakpoint: 'mobile',
      width: 480
    }
  ]
}
