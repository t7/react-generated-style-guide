// node built ins
var fs = require('fs');

// 3rd party deps
var glob = require('glob')
var React = require('react')

var babel = require("babel-core")

var paths = glob.sync('src/style_guide/components/*')

var patternsJSON = paths.filter(function(path){

  if(fs.lstatSync(path).isDirectory()){

    if(path === 'src/style_guide/components/form_button'){

      var _path = process.cwd()+'/'+path+'/template.js'

      var Button = babel.transformFileSync(_path);

      var html = React.renderToString(React.createElement(Button))

      console.log(html)

    }

  }

});

//console.log(patternsJSON)

