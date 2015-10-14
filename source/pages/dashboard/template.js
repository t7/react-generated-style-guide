// Dependencies.
import React from 'react'

// App components.
import App from '../../layouts/app'

// Misc components.
import Grid from '../../components_misc/unsemantic/grid_unit'
import GridContainer from '../../components_misc/unsemantic/grid_container'

// UI components.
import Button from '../../components/form_button/template'
import DataTable from '../../components/data_table/template'

// CSS.
import style from '../../css/t7-list.css'

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

        <GridContainer>
          <Grid desktop='33' tablet='33'>
            Test
          </Grid>
          <Grid desktop='33' tablet='33'>
            Test
          </Grid>
          <Grid desktop='33' tablet='33'>
            Test
          </Grid>
        </GridContainer>

      </App>
    )
  }
}

// Validation.
Page.propTypes = {
  location: React.PropTypes.object,
  route: React.PropTypes.object
}

// Export.
export default Page
