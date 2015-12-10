/*
  This file exists to pull in CSS in a "CSS Modules"
  way. It should be kept in sync with the various CSS
  files that `./isg/pages/*` make use of.

  This is necessary because they are flat-file compiled,
  so their CSS isn't built by Webpack as it would be
  in a typical hot-compiled JS "app" approach.
*/

// Layout.
import './layouts/isg-app.css'

// Grid.
import './components_misc/unsemantic/grid.css'

// Global CSS.
import './css/reset.css'
import './css/global.css'

// Code highlighting.
import './css/prism.css'

// Style guide CSS.
import './css/isg-section.css'

// Pilfered from "source".
import './css/isg-form.css'
import './css/isg-helper.css'

// Component level CSS.
import './components/color_list/isg-color-list.css'
import './components/image_figure/isg-figure.css'
import './components/list_inline/isg-list-inline.css'
