// Dependencies.
import React from 'react'

// CSS.
import helper from '../../css/t7-helper.css'

// App components.
import App from '../../layouts/app'

// Utility methods.
import fake from '../../fake'
import utils from '../../utils'

// Misc components.
import Grid from '../../components_misc/unsemantic/grid_unit'
import GridOffset from '../../components_misc/unsemantic/grid_offset'
import GridContainer from '../../components_misc/unsemantic/grid_container'

// UI components.
import Button from '../../components/form_button/template'
import DataTable from '../../components/data_table/template'
import Image from '../../components/image/template'
import ImageFigure from '../../components/image_figure/template'
import ListSeparator from '../../components/list_separator/template'
import Tabs from '../../components/tabs/template'
import TabPanel from '../../components/tabs/template_panel'

// TODO.
import Box from '../../components/box/template'
import BoxInfo from '../../components/box_info/template'
import BoxNegative from '../../components/box_negative/template'
import BoxPositive from '../../components/box_positive/template'
import BoxWarn from '../../components/box_warn/template'

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

              <small>
                Jonathan W. Rogersonian
              </small>
            </h1>

            <div className={rightClassName}>
              <ListSeparator>
                <li>
                  <a>Edit Accounts</a>
                </li>
                <li>
                  <a>Add Account</a>
                </li>
              </ListSeparator>
            </div>

            <hr />

          </Grid>

          <Grid desktop='75' tablet='75'>

            <Tabs selected={0}>

              <TabPanel label='Checking'>

                <h2 className={styleHeading}>
                  Checking
                </h2>

                <div className={rightClassName}>
                  <p className={helper['t7-mute']}>
                    Account #: TK-421
                  </p>
                </div>

                <hr />

                <ListSeparator>
                  <li>
                    <a>Schedule Payment</a>
                  </li>
                  <li>
                    <a>Transfer Funds</a>
                  </li>
                  <li>
                    <a>Spending Trends</a>
                  </li>
                </ListSeparator>

                <DataTable
                  data={fake.dataTableRows(70, 3500)}
                  pageSize={15}
                  pageTop={pageTop}
                  pageBottom={pageBottom}
                />

              </TabPanel>

              <TabPanel label='Savings'>

                <h2 className={styleHeading}>
                  Savings
                </h2>

                <div className={rightClassName}>
                  <p className={helper['t7-mute']}>
                    Account #: 867-5309
                  </p>
                </div>

                <hr />

                <ListSeparator>
                  <li>
                    <a>Investment Advice</a>
                  </li>
                  <li>
                    <a>Retirement Planning</a>
                  </li>
                </ListSeparator>

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

            <h6>
              Growth Opportunity
            </h6>

            <ImageFigure
              alt='PHOTO HERE'
              caption='High Yield Potential'
              width='100%'
              height='50%'
            />

            <GridOffset>

              <Grid desktop='33' tablet='33' mobile='33'>
                <p>
                  <Image width='100%' height='100%' alt='FPO' />
                </p>
              </Grid>

              <Grid desktop='33' tablet='33' mobile='33'>
                <p>
                  <Image width='100%' height='100%' alt='FPO' />
                </p>
              </Grid>

              <Grid desktop='33' tablet='33' mobile='33'>
                <p>
                  <Image width='100%' height='100%' alt='FPO' />
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

// Export.
export default Page
