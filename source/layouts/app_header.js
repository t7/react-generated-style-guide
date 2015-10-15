// Dependencies.
import React from 'react'

// CSS.
import style from './t7-app.css'
import list from '../css/t7-list.css'

// Misc components.
import Grid from '../components_misc/unsemantic/grid_unit'
import GridContainer from '../components_misc/unsemantic/grid_container'

// UI components.
import Input from '../components/form_input/template'

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
          <Grid desktop='25' tablet='25'>
            ACME
          </Grid>
          <Grid desktop='50' tablet='50'>
            <ul className={list['t7-list--separator']}>
              <li>
                <a>My Accounts</a>
              </li>
              <li>
                <a>User Profile</a>
              </li>
              <li>
                <a>Log Out</a>
              </li>
            </ul>
          </Grid>
          <Grid desktop='25' tablet='25'>
            <Input type='search' placeholder='Search&hellip;' />
          </Grid>
        </GridContainer>
      </header>
    )
  }
}

// Export.
export default Footer
