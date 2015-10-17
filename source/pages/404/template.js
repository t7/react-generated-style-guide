// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// App components.
import App from '../../layouts/app'

// Misc components.
import Markdown from '../../components_misc/markdown/text'
import Grid from '../../components_misc/unsemantic/grid_unit'
import GridContainer from '../../components_misc/unsemantic/grid_container'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Set page title.
    utils.title(props)
  }

  // Render method.
  render () {
    return (
      <App>

        <GridContainer>

          <Grid desktop='100'>

            <Markdown file='doc_404.md' />

          </Grid>

        </GridContainer>

      </App>
    )
  }
}

// Export.
export default Page
