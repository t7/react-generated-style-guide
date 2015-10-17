// Dependencies.
import React from 'react'

// Layout components.
import App from '../../layouts/app'
import Main from '../../layouts/app_main'
import Sidebar from '../../layouts/app_sidebar'

// Misc components.
import Grid from '../../components_misc/unsemantic/grid_unit'
import GridOffset from '../../components_misc/unsemantic/grid_offset'

// UI components.
import ImageFigure from '../../components/image_figure/template'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const main = []
    const sidebar = []

    main.push(
      <h1>
        Project Screens
      </h1>
    )

    this.props.data.map(function (item, i) {
      const id = item.id
      const href = '#' + id
      const name = item.name
      const url = item.url

      const img_border = '#ddd'
      const img_path = '/style_guide/screens/shots/'

      const img_mobile = img_path + id + '_mobile.png'
      const img_tablet = img_path + id + '_tablet.png'
      const img_desktop = img_path + id + '_desktop.png'

      // Build main markup.
      main.push(
        <GridOffset key={i}>
          <Grid desktop='100'>
            <hr />
            <h2 id={id}>
              {name}

              <small>
                &mdash;
                <a href={url}>View Live Page</a>
              </small>
            </h2>
          </Grid>
          <Grid desktop='33' tablet='33'>
            <ImageFigure
              alt={'Screenshot of ' + name + ' on mobile'}
              caption='Mobile'
              captionTop
              href={img_mobile}
              src={img_mobile}
              target='_blank'
            />
          </Grid>
          <Grid desktop='33' tablet='33'>
            <ImageFigure
              alt={'Screenshot of ' + name + ' on tablet'}
              caption='Tablet'
              captionTop
              href={img_tablet}
              src={img_tablet}
              target='_blank'
            />
          </Grid>
          <Grid desktop='33' tablet='33'>
            <ImageFigure
              alt={'Screenshot of ' + name + ' on desktop'}
              caption='Desktop'
              captionTop
              href={img_desktop}
              src={img_desktop}
              target='_blank'
            />
          </Grid>
        </GridOffset>
      )

      // Build sidebar markup.
      sidebar.push(
        <li key={i}>
          <a href={href}>
            {name}
          </a>
        </li>
      )
    })

    return (

      <App>

        <Sidebar>
          <ul>
            {sidebar}
          </ul>
        </Sidebar>

        <Main>
          {main}
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
