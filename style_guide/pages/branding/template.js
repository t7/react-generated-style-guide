// Dependencies.
import React from 'react'

// Layout Components.
import App from '../../layouts/app'
import Main from '../../layouts/app_main'
import Sidebar from '../../layouts/app_sidebar'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <App>

        <Sidebar>
          <ul>
            <li>
              <a href='#'>Uno</a>
            </li>
            <li>
              <a href='#'>Dos</a>
            </li>
            <li>
              <a href='#'>Tres</a>
            </li>
          </ul>
        </Sidebar>

        <Main>

<div class="sg-content">

<div class="sg-section-title">Branding</div>
<br><br>
<p class="sg-description">
This page contains branding related details, including colors, fonts, and iconography.
</p>

<br><br>

  <div class="sg-title sg-group-title" id="colors">Colors</div>

  {{#each branding.colors}}

  <div class="sg-color">
    <div class="sg-color-sample" style="background:{{value}};"></div>
    <div class="sg-color-title">{{{title}}}<br/><span style="text-transform:uppercase;">{{{value}}}</span></div>
    <div class="sg-color-description">{{{description}}}</div>
  </div>
  {{/each}}

  <br>
  <br>
  <br>
  <br>

  <div class="sg-title sg-group-title" id="fonts">Fonts</div>
  <br><br>
  <p class="sg-description">
  The Web Fonts shown below require a paid license and are used here for example purposes only.
  <br><br>
  In cases where a Web Font is not available, the default operating system's default
  sans-serif font will be used. The default on Windows is Arial, for Mac and iOS it is Helvetica, and on Android devices it is Android Sans.
  </p>
<br>

  {{#each branding.typography}}

  <div class="sg-title sg-item-title" style="font-family:{{font-family}};border-bottom:1px solid #ddd;">{{title}}<span style="font-size:14px;font-style:italic;color:#666;font-weight:normal;margin-left: 20px;">{{description}}</span></div>

  <div class="sg-font" style="font-family:{{font-family}};">

    <p style="padding: 2px;margin:0 0 0 20px;">
      Grumpy wizards make toxic brew for the evil Queen and Jack.
    </p>
    <p style="padding: 2px;margin:0 0 0 20px;">
      abcdefghijklmnopqrstuvwxyz
    </p>
    <p style="padding: 2px;margin:0 0 0 20px;">
      ABCDEFGHIJKLMNOPQRSTUVWXYZ
    </p>
    <p style="padding: 2px;margin:0 0 0 20px;">
      0123456789(!@#$%.,?:;)
    </p>
  </div>

  {{/each}}

  <br>
  <br>
  <br>
  <br>

  <div class="sg-title sg-group-title" id="icons">Icons</div>
<br><br>
  <p class="sg-description">Icons are in SVG format and can be scaled to any size using CSS. </p>
  <br>

  {{#each branding.icons}}
  <div class="sg-icon">
    <a href="{{src}}" style="background-image:url({{src}});"></a>
    <div class="sg-icon-title">.afc-icon-{{className}}</div>
  </div>
  {{/each}}

</div>


        </Main>

      </App>
    )
  }
}

// Validation.
Page.propTypes = {
  data: React.PropTypes.array
}

// Export.
export default Page
