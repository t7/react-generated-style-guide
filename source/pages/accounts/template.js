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
import AccordionMulti from '../../components/accordion_multi/template'
import AccordionPanel from '../../components/accordion/template_panel'
import Button from '../../components/form_button/template'
import DataTable from '../../components/data_table/template'
import Image from '../../components/image/template'
import ImageFigure from '../../components/image_figure/template'
import ListSeparator from '../../components/list_separator/template'
import Tabs from '../../components/tabs/template'
import TabPanel from '../../components/tabs/template_panel'

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
              Bank Accounts

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

            <h6>
              <abbr title='Frequently Asked Questions'>
                FAQ
              </abbr>
            </h6>

            <AccordionMulti selected={{}}>
              <AccordionPanel label='Is it worth refinancing my home?'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </AccordionPanel>
              <AccordionPanel label="How much should I save for tuition?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </AccordionPanel>
              <AccordionPanel label="When should I begin saving for retirement?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </AccordionPanel>
            </AccordionMulti>

          </Grid>

          <Grid desktop='25' tablet='25'>

            <h6>
              Growth Opportunity
            </h6>

            <ImageFigure
              alt='Man looking across a lake at Matterhorn'
              caption='High Yield Potential'
              src='./static/images/fpo_matterhorn.jpg'
              width='100%'
              height='50%'
            />

            <GridOffset>

              <Grid desktop='33' tablet='33' mobile='33'>
                <p>
                  <Image
                    alt='A dock at sunset'
                    src='./static/images/fpo_dock.jpg'
                    width='100%'
                    height='100%'
                  />
                </p>
              </Grid>

              <Grid desktop='33' tablet='33' mobile='33'>
                <p>
                  <Image
                    alt='Phone taking a photo of the ocean'
                    src='./static/images/fpo_phone_ocean.jpg'
                    width='100%'
                    height='100%'
                  />
                </p>
              </Grid>

              <Grid desktop='33' tablet='33' mobile='33'>
                <p>
                  <Image
                    alt='Phone booth in the UK'
                    src='./static/images/fpo_phone_booth.jpg'
                    width='100%'
                    height='100%'
                  />
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
              <Button mode='positive' text='Learn More' href='#profile' />
            </p>

          </Grid>

        </GridContainer>

      </App>
    )
  }
}

// Export.
export default Page
