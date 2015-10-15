// Dependencies.
import React from 'react'
import { Link } from 'react-router'

// CSS.
import style from './t7-app.css'

// Misc components.
import Grid from '../components_misc/unsemantic/grid_unit'
import GridContainer from '../components_misc/unsemantic/grid_container'
import ListSeparator from '../components/list_separator/template'

// UI components.
import Search from '../components/form_search/template'

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
            <a className={style['t7-app__header__logo']}>
              ACME
            </a>
          </Grid>
          <Grid desktop='50' tablet='50'>
            <ListSeparator>
              <li>
                <Link to='/'>My Accounts</Link>
              </li>
              <li>
                <Link to='/profile'>User Profile</Link>
              </li>
              <li>
                <a>Log Out</a>
              </li>
            </ListSeparator>
          </Grid>
          <Grid desktop='25' tablet='25'>
            <Search />
          </Grid>
        </GridContainer>
      </header>
    )
  }
}

// Export.
export default Footer
