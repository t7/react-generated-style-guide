import React from 'react'
import ReactDOMServer from 'react-dom/server';

function render(Component){
  return ReactDOMServer.renderToStaticMarkup(<Component />)
}

export default render
