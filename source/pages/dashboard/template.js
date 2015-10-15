// Dependencies.
import React from 'react'

// CSS.
import list from '../../css/t7-list.css'
import helper from '../../css/t7-helper.css'

// App components.
import App from '../../layouts/app'

// Utility methods.
import fake from '../../fake'

// Misc components.
import Grid from '../../components_misc/unsemantic/grid_unit'
import GridOffset from '../../components_misc/unsemantic/grid_offset'
import GridContainer from '../../components_misc/unsemantic/grid_container'

// UI components.
import Button from '../../components/form_button/template'
import DataTable from '../../components/data_table/template'
import Image from '../../components/image/template'
import ImageFigure from '../../components/image_figure/template'
import Tabs from '../../components/tabs/template'
import TabPanel from '../../components/tabs/template_panel'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    // Pagination.
    const pageTop = false
    const pageBottom = true

    // Right top area.
    const rightClassName = [
      helper['t7-tablet-float-right'],
      helper['t7-desktop-float-right']
    ].join(' ')

    // Heading area.
    const styleHeading = [
      helper['t7-tablet-float-left'],
      helper['t7-desktop-float-left']
    ].join(' ')

    return (
      <App>

        <GridContainer>

          <Grid desktop='100'>

            <h1 className={styleHeading}>
              My Accounts
            </h1>

            <div className={rightClassName}>
              <ul className={list['t7-list--separator']}>
                <li>
                  <a>Edit Accounts</a>
                </li>
                <li>
                  <a>Add Account</a>
                </li>
              </ul>
            </div>

            <hr />

          </Grid>

          <Grid desktop='75' tablet='75'>

            <Tabs selected={0}>

              <TabPanel label='Checking'>

                <h2>
                  Checking
                </h2>

                <hr />

                <ul className={list['t7-list--separator']}>
                  <li>
                    <a>Schedule a Payment</a>
                  </li>
                  <li>
                    <a>Transfer Funds</a>
                  </li>
                  <li>
                    <a>Spending Trends</a>
                  </li>
                </ul>

                <DataTable
                  data={fake.dataTableRows(70, 3500)}
                  pageSize={15}
                  pageTop={pageTop}
                  pageBottom={pageBottom}
                />

              </TabPanel>

              <TabPanel label='Savings'>

                <h2>
                  Savings
                </h2>

                <hr />

                <ul className={list['t7-list--separator']}>
                  <li>
                    <a>Investment Advice</a>
                  </li>
                  <li>
                    <a>Retirement Planning</a>
                  </li>
                </ul>

                <DataTable
                  data={fake.dataTableRows(70, 9000)}
                  pageSize={15}
                  pageTop={pageTop}
                  pageBottom={pageBottom}
                />

              </TabPanel>

            </Tabs>

          </Grid>

          <Grid desktop='25' tablet='25'>

            <ImageFigure
              alt='PLACEHOLDER'
              caption='High Yield Opportunity'
              width='500'
              height='250'
            />

            <GridOffset>

              <Grid desktop='33' tablet='33' mobile='33'>
                <p>
                  <Image width='100%' height='100%' />
                </p>
              </Grid>

              <Grid desktop='33' tablet='33' mobile='33'>
                <p>
                  <Image width='100%' height='100%' />
                </p>
              </Grid>

              <Grid desktop='33' tablet='33' mobile='33'>
                <p>
                  <Image width='100%' height='100%' />
                </p>
              </Grid>

            </GridOffset>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              <Button mode='positive' text='Learn More' />
            </p>

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
