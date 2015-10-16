// Dependencies.
import React from 'react'

// CSS.
import helper from '../../css/t7-helper.css'

// Utility methods.
import utils from '../../utils'

// App components.
import App from '../../layouts/app'

// Misc components.
import Clear from '../../components_misc/unsemantic/grid_clear'
import Grid from '../../components_misc/unsemantic/grid_unit'
import GridOffset from '../../components_misc/unsemantic/grid_offset'
import GridContainer from '../../components_misc/unsemantic/grid_container'

// UI components.
import Box from '../../components/box/template'
import BoxInfo from '../../components/box_info/template'
import BoxPositive from '../../components/box_positive/template'
import Image from '../../components/image/template'
import ListInline from '../../components/list_inline/template'

// Form components.
import Button from '../../components/form_button/template'
import Checkbox from '../../components/form_checkbox/template'
import Input from '../../components/form_input/template'
import RadioListInline from '../../components/form_radio_list_inline/template'
import Select from '../../components/form_select/template'
import Textdiv from '../../components/form_textdiv/template'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Set page title.
    utils.title(props)
  }

  // Form submit.
  handleSubmit (e) {
    utils.stop(e)

    // Could harvest the key/values, etc.
    utils.log(e)
  }

  // Render method.
  render () {
    // Events.
    const handleSubmit = this.handleSubmit.bind(this)

    return (
      <App>

        <GridContainer>

          <Grid desktop='100'>

            <h1>
              User Profile

              <small>
                Jonathan W. Rogersonian
              </small>
            </h1>

            <hr />

          </Grid>

          <Grid
            desktop='80'
            desktop-suffix='5'

            tablet='80'
            tablet-suffix='5'
          >

            <BoxInfo>
              Please ensure that the following information is accurate. In case of a catastrophic space disaster, this is how we will notify your next of kin. Also, please note if you have any food allergies. Thanks.
            </BoxInfo>

            <form onSubmit={handleSubmit}>

              <h2>
                Personal
              </h2>

              <Box>

                <GridOffset>

                  <Grid desktop='45' tablet='45'>
                    <p>
                      <label htmlFor='_input_first_name'>
                        First Name
                      </label>
                      <br />
                      <Input id='_input_first_name' value='Jonathan' />
                    </p>
                  </Grid>

                  <Grid desktop='10' tablet='10'>
                    <p>
                      <label htmlFor='_input_middle_initial'>
                        <abbr title='Middle Initial'>
                          M.I.
                        </abbr>
                      </label>
                      <br />
                      <Input id='_input_middle_initial' value='W' />
                    </p>
                  </Grid>

                  <Grid desktop='45' tablet='45'>
                    <p>
                      <label htmlFor='_input_last_name'>
                        Last Name
                      </label>
                      <br />
                      <Input id='_input_last_name' value='Rogersonian' />
                    </p>
                  </Grid>

                  <Clear />

                   <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='_input_birth_date'>
                        Birth Date
                      </label>
                      <br />
                      <Input id='_input_birth_date' value='02/10/1990' />
                    </p>
                  </Grid>

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='_input_ssn'>
                        <abbr title='Social Security Number'>
                          SSN
                        </abbr>
                      </label>
                      <br />
                      <Input id='_input_ssn' value='007-50-1337' />
                    </p>
                  </Grid>

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='_input_email'>
                        Email
                      </label>
                      <br />
                      <Input id='_input_email' value='jwr@example.com' />
                    </p>
                  </Grid>

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='_input_phone'>
                        Phone
                      </label>
                      <br />
                      <Input id='_input_phone' value='555-867-5309' />
                    </p>
                  </Grid>

                </GridOffset>

              </Box>

              <h2>
                Address
              </h2>

              <Box>

                <GridOffset>

                  <Grid desktop='100'>

                    <p>
                      Note: We are currently only accepting applicants who reside within the United States, have a valid US passport, and were born within Earth orbit. Moon colonials are encouraged to apply.
                    </p>

                    <hr />

                  </Grid>

                  <Grid desktop='100'>
                    <p>
                      <label htmlFor='_input_address_1'>
                        Street Address
                      </label>
                      <br />
                      <Input id='_input_address_1' value='1234 Fifth Street' />
                    </p>
                  </Grid>

                  <Grid desktop='100'>
                    <p>
                      <label htmlFor='_input_address_2'>
                        Address Line 2
                      </label>
                      <br />
                      <Input id='_input_address_2' value='Apartment B' />
                    </p>
                  </Grid>

                  <Grid desktop='40' tablet='40'>
                    <p>
                      <label htmlFor='_input_city'>
                        City
                      </label>
                      <br />
                      <Input id='_input_city' value='Beverly Hills' />
                    </p>
                  </Grid>

                  <Grid desktop='30' tablet='30'>
                    <p>
                      <label htmlFor='_input_state'>
                        State
                      </label>
                      <br />
                      <Select
                        id='_input_state'
                        value='CA'

                        options={
                          JSON.parse(
                            require('raw!./states.json')
                          )
                        }
                      />
                    </p>
                  </Grid>

                  <Grid desktop='30' tablet='30'>
                    <p>
                      <label htmlFor='_input_zip'>
                        Zip Code
                      </label>
                      <br />
                      <Input id='_input_zip' value='90210' />
                    </p>
                  </Grid>

                </GridOffset>

              </Box>

              <h2>
                Medical
              </h2>

              <Box>

                <p>
                  If you are allergic to any foods or medications, please list them here. Also make note of the last time you interacted with aliens from any planet known to have contaigions. This will not necessarily disqualify you from consideration.
                </p>

                <hr />

                <label htmlFor='_input_allergies' id='foo'>
                  Allergies & Contagions
                </label>
                <br />
                <Textdiv
                  id='_input_allergies'
                  value='No food allergies, but I am deathly allergic to cats.'
                />

              </Box>

              <h2>
                Combat
              </h2>

              <Box>

                <p>
                  Do you have any specialized combat training against sentient life forms who are capable of teleportation?
                </p>

                <RadioListInline
                  options={[
                    {
                      checked: true,
                      label: 'Yes',
                      name: '_input_combat_training'
                    },
                    {
                      label: 'No',
                      name: '_input_combat_training'
                    }
                  ]}
                />

              </Box>

              <h2>
                Supplemental Notes
              </h2>

              <Box>

                <p>
                  In the event you are irrecoverably lost in space, you may leave special instructions with us ahead of time. These instructions will only be acted upon if you are unable to return to Earth. Otherwise, the contents of this message will not be read by anyone, including mission control.
                </p>

                <hr />

                <label htmlFor='_input_farewell'>
                  Final Message
                </label>
                <br />
                <Textdiv
                  id='_input_farewell'
                  value='Tell the commander that it *was* me who set fire to his car. Sorry! :)'
                />

              </Box>

              <BoxPositive close={false} icon={false}>

                <p>
                  By submitting this form, you hereby grant ACME Corp. the right to conduct a background check. If you are found to be falsifying information, you will be prosecuted to the fullest extend of intergalactic law. You also acknowledge that should you be accepted to the training program, we reserve the right to eject you (into space) if you are a danger to the rest of the crew. If you are captured during any covert missions, the United States will disavow all knowledge of your official involvement, and you will be branded as a rogue agent.
                </p>

                <p>
                  <Checkbox label='I agree to these terms.' />
                </p>

                <ListInline>
                  <li>
                    <Button
                      text='Complete Registration'
                      mode='positive'
                      type='submit'
                    />
                  </li>
                  <li>
                    <Button
                      text='Cancel'
                    />
                  </li>
                </ListInline>

              </BoxPositive>

            </form>

          </Grid>

          <Grid desktop='15' tablet='15' mobile-hide>
            <p className={helper['t7-align-center']}>
              <Image alt='PHOTO' width='200' height='200' />
              <br />
              <small>
                <a title='Edit Photo'>Edit</a>
              </small>
            </p>
          </Grid>

        </GridContainer>

      </App>
    )
  }
}

// Export.
export default Page
