// Dependencies.
import React from 'react'

// CSS.
import '../../css/t7-helper.css'

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
import BoxInfo from '../../components/box_info/template'
import Fieldset from '../../components/fieldset/template'
import FieldsetPositive from '../../components/fieldset_positive/template'
import Image from '../../components/image/template'
import ListInline from '../../components/list_inline/template'

// Form components.
import Button from '../../components/form_button/template'
import Checkbox from '../../components/form_checkbox/template'
import Input from '../../components/form_input/template'
import RadioListInline from '../../components/form_radio_list_inline/template'
import Select from '../../components/form_select/template'
import Textdiv from '../../components/form_textdiv/template'

// JSON.
import statesData from './states.json'

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

    // Get the `<form>` tag.
    const form = e.target

    // Get form data.
    const data = utils.parseFormData(form)

    // Log the form data.
    utils.log(data)
  }

  // Render method.
  render () {
    // Events.
    const handleSubmit = this.handleSubmit.bind(this)

    return (
      <App>

        <GridContainer>

          <Grid desktop='100' mobile='75' mobile-push='25'>

            <h1>
              User Profile

              <small>
                Jonathan W. Rogersonian
              </small>
            </h1>

            <hr />

          </Grid>

          <Grid desktop='15' tablet='15' mobile='25' mobile-pull='75'>
            <p className='t7-align-center'>
              <Image
                alt='Photo of Jonathan'
                border='#ddd'
                src='./static/images/fpo_jonathan_rogersonian.jpg'
                width='100%'
              />
              <br />
              <small>
                <a title='Edit Photo'>Edit</a>
              </small>
            </p>
          </Grid>

          <Grid
            desktop='80'
            desktop-prefix='5'

            tablet='80'
            tablet-prefix='5'

            mobile='100'
          >

            <BoxInfo>
              Please ensure that the following information is accurate. In case of a catastrophic space disaster, this is how we will notify your next of kin. Also, please note if you have any food allergies. Thanks.
            </BoxInfo>

            <form onSubmit={handleSubmit}>

              <Fieldset legend='Personal'>

                <GridOffset>

                  <Grid desktop='45' tablet='45'>
                    <p>
                      <label htmlFor='_input_first_name'>
                        First Name

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='_input_first_name'
                        defaultValue='Jonathan'
                      />
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
                      <Input
                        id='_input_middle_initial'
                        defaultValue='W'
                      />
                    </p>
                  </Grid>

                  <Grid desktop='45' tablet='45'>
                    <p>
                      <label htmlFor='_input_last_name'>
                        Last Name

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='_input_last_name'
                        defaultValue='Rogersonian'
                      />
                    </p>
                  </Grid>

                  <Clear />

                   <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='_input_birth_date'>
                        Birth Date

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='_input_birth_date'
                        defaultValue='02/10/1990'
                      />
                    </p>
                  </Grid>

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='_input_ssn'>
                        <abbr title='Social Security Number'>
                          SSN

                          <abbr title='Required'>*</abbr>
                        </abbr>
                      </label>
                      <br />
                      <Input
                        id='_input_ssn'
                        defaultValue='007-50-1337'
                      />
                    </p>
                  </Grid>

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='_input_email'>
                        Email

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='_input_email'
                        defaultValue='jwr@example.com'
                      />
                    </p>
                  </Grid>

                  <Grid desktop='25' tablet='25'>
                    <p>
                      <label htmlFor='_input_phone'>
                        Phone

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='_input_phone'
                        defaultValue='555-867-5309'
                      />
                    </p>
                  </Grid>

                </GridOffset>

              </Fieldset>

              <Fieldset legend='Address'>

                <GridOffset>

                  <Grid desktop='100'>

                    <p>
                      Note: We are currently only accepting applicants who are citizens of the United States, have a valid US passport, and were born within Earth orbit. Moon colonials are encouraged to apply.
                    </p>

                    <hr />

                  </Grid>

                  <Grid desktop='50' tablet='50'>
                    <p>
                      <label htmlFor='_input_address_1'>
                        Street Address

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='_input_address_1'
                        defaultValue='1234 Fifth Street'
                      />
                    </p>
                  </Grid>

                  <Grid desktop='50' tablet='50'>
                    <p>
                      <label htmlFor='_input_address_2'>
                        Address Line 2
                      </label>
                      <br />
                      <Input
                        id='_input_address_2'
                        defaultValue='Apartment B'
                      />
                    </p>
                  </Grid>

                  <Clear />

                  <Grid desktop='40' tablet='40'>
                    <p>
                      <label htmlFor='_input_city'>
                        City

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='_input_city'
                        defaultValue='Beverly Hills'
                      />
                    </p>
                  </Grid>

                  <Grid desktop='40' tablet='40'>
                    <p>
                      <label htmlFor='_input_state'>
                        State

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Select
                        id='_input_state'
                        defaultdefaultValue='CA'
                        options={statesData}
                      />
                    </p>
                  </Grid>

                  <Grid desktop='20' tablet='20'>
                    <p>
                      <label htmlFor='_input_zip'>
                        Zip Code

                        <abbr title='Required'>*</abbr>
                      </label>
                      <br />
                      <Input
                        id='_input_zip'
                        defaultValue='90210'
                      />
                    </p>
                  </Grid>

                </GridOffset>

              </Fieldset>

              <Fieldset legend='Medical'>

                <p>
                  If you are allergic to any foods or medications, please list them here. Also make note of the last time you interacted with aliens from any planet known to have contaigions. This will not necessarily disqualify you from consideration.
                </p>

                <hr />

                <label htmlFor='_input_allergies'>
                  Allergies & Contagions
                </label>
                <br />
                <Textdiv
                  id='_input_allergies'
                  defaultValue='No food allergies, but I am deathly allergic to cats.'
                />

              </Fieldset>

              <Fieldset legend='Combat'>

                <p>
                  Do you have any specialized combat training against sentient life forms who are capable of teleportation?
                </p>

                <RadioListInline
                  options={[
                    {
                      defaultChecked: true,
                      label: 'Yes',
                      value: 'true',
                      name: '_input_combat_training'
                    },
                    {
                      label: 'No',
                      value: 'false',
                      name: '_input_combat_training'
                    }
                  ]}
                />

                <hr />

                <p>
                  Do you have a current license to kill, and/or have you been certified in the past?
                </p>

                <RadioListInline
                  options={[
                    {
                      defaultChecked: true,
                      label: 'Yes',
                      value: 'true',
                      name: '_input_license_to_kill'
                    },
                    {
                      label: 'No',
                      value: 'false',
                      name: '_input_license_to_kill'
                    }
                  ]}
                />

              </Fieldset>

              <Fieldset legend='Farewell'>

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
                  defaultValue='Tell the commander that it *was* me who set fire to his car. Sorry! :)'
                />

              </Fieldset>

              <FieldsetPositive legend='Terms & Conditions'>

                <p>
                  By submitting this form, you hereby grant ACME Corp. the right to conduct a background check. If you are found to be falsifying information, you will be prosecuted to the fullest extent of intergalactic law. You also acknowledge that should you be accepted to the training program, we reserve the right to eject you (into space) if you are a danger to the rest of the crew. If you are captured during any covert missions, the United States will disavow all knowledge of your official involvement, and you will be branded as a rogue agent.
                </p>

                <p>
                  <Checkbox
                    id='_input_agree_terms'
                    label='I agree to these terms.'
                  />
                </p>

                <ListInline>
                  <li>
                    <Button
                      text='Update Profile Details'
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

              </FieldsetPositive>

            </form>

          </Grid>

        </GridContainer>

      </App>
    )
  }
}

// Export.
export default Page
