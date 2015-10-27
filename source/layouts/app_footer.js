// Dependencies.
import React from 'react'

// CSS.
import './t7-app.css'

// Misc components.
import Clear from '../components_misc/unsemantic/grid_clear'
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
    const year = new Date().getFullYear()

    return (
      <footer className='t7-app__footer' role='contentinfo'>

        <GridContainer>

          <Grid desktop='25' tablet='25' mobile='50'>
            <dl>
              <dt>
                Company
              </dt>
              <dd>
                <a>About Us</a>
              </dd>
              <dd>
                <a>Careers</a>
              </dd>
              <dd>
                <a>Contact Us</a>
              </dd>
              <dd>
                <a>Our Locations</a>
              </dd>
            </dl>
          </Grid>

          <Grid desktop='25' tablet='25' mobile='50'>
            <dl>
              <dt>
                Industries
              </dt>
              <dd>
                <a>Aerospace</a>
              </dd>
              <dd>
                <a>Automotive</a>
              </dd>
              <dd>
                <a>Interplanetary Travel</a>
              </dd>
              <dd>
                <a>Teleportation Devices</a>
              </dd>
            </dl>
          </Grid>

          <Clear desktop-hide tablet-hide />

          <Grid desktop='25' tablet='25' mobile='50'>
            <dl>
              <dt>
                Community
              </dt>
              <dd>
                <a>Annual BBQ</a>
              </dd>
              <dd>
                <a>Charity Giving</a>
              </dd>
              <dd>
                <a>Leadership Mentoring</a>
              </dd>
              <dd>
                <a>Learn to Code</a>
              </dd>
            </dl>
          </Grid>

          <Grid desktop='25' tablet='25' mobile='50'>
            <dl>
              <dt>
                Legal
              </dt>
              <dd>
                <a>Cookie Policy</a>
              </dd>
              <dd>
                <a>Patent Info</a>
              </dd>
              <dd>
                <a>Terms & Conditions</a>
              </dd>
              <dd>
                &copy; {year} ACME Corp.
              </dd>
            </dl>
          </Grid>

        </GridContainer>

      </footer>
    )
  }
}

// Export.
export default Footer
