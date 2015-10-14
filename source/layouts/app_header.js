// Dependencies.
import React from 'react'

// CSS.
import style from './t7-app.css'

// Misc components.
import Grid from '../components_misc/unsemantic/grid_unit'
import GridContainer from '../components_misc/unsemantic/grid_container'

// Define class.
class Footer extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <header className={style['t7-app__header']} role='banner'>
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
      </header>
    )
  }
}

// Export.
export default Footer
