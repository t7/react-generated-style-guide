var React = require('react')
var ReactDOMServer = require('react-dom/server')

require('webpack-require')(
  require('../webpack.config.js'),
  require.resolve('../src/style_guide/components/form_button/template.js'),
  function(err, factory, stats, fs) {

    if (err) console.error(err);

    var html = ReactDOMServer.renderToStaticMarkup(React.createElement(factory()))

    console.log(html)

  }
);