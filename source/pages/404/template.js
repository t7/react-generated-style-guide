// Dependencies.
import React from 'react'
import { Link } from 'react-router'

// Utility methods.
import utils from '../../utils'

// App components.
import App from '../../layouts/app'

// Misc components.
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

            <h1>
              Page Not Found :(
            </h1>

            <p>
              Sorry, but we couldn't find that page.
            </p>

            <p>
              Please start again at the <Link to='/'>My Accounts</Link> page.
            </p>

          </Grid>

        </GridContainer>

      </App>
    )
  }
}

// Export.
export default Page
