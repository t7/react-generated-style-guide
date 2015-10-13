// Dependencies.
import React from 'react'
import { Link } from 'react-router'

// Layout components.
import App from '../../layouts/app'
import Main from '../../layouts/app_main'
import Sidebar from '../../layouts/app_sidebar'

// Style guide components.
import Code from '../../components/markdown/code'
import Grid from '../../components/unsemantic/grid_unit'
import GridContainer from '../../components/unsemantic/grid_container'

// Fake data generator.
import fake from '../../../source/fake'

// UI components.
import Button from '../../../source/components/form_button/template'
import Checkbox from '../../../source/components/form_checkbox/template'
import CheckboxList from '../../../source/components/form_checkbox_list/template'
import CheckboxListInline from '../../../source/components/form_checkbox_list_inline/template'
import Image from '../../../source/components/image/template'
import ImageFigure from '../../../source/components/image_figure/template'
import Input from '../../../source/components/form_input/template'
import Radio from '../../../source/components/form_radio/template'
import RadioList from '../../../source/components/form_radio_list/template'
import RadioListInline from '../../../source/components/form_radio_list_inline/template'
import Select from '../../../source/components/form_select/template'
import DataTable from '../../../source/components/data_table/template'
import Tabs from '../../../source/components/tabs/template'
import TabPanel from '../../../source/components/tabs/template_panel'
import Textarea from '../../../source/components/form_textarea/template'
import Textdiv from '../../../source/components/form_textdiv/template'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <App
        path={this.props.location.pathname}
        titles={this.props.route.titles}
      >

        <Sidebar>
          <ul>
            <li>
              <Link to='/foobar'>Foobar - Catch All</Link>
            </li>
            <li>
              <Link to='/'>Intro</Link>
            </li>
            <li>
              <Link to='/branding'>Branding</Link>
            </li>
            <li>
              <Link to='/patterns'>Patterns</Link>
            </li>
            <li>
              <Link to='/requirements'>Requirements</Link>
            </li>
            <li>
              <Link to='/templates'>Templates</Link>
            </li>
          </ul>
        </Sidebar>

        <Main>

          <h1>
            Example UI Elements
          </h1>

          <hr />

          <h2>
            Data Table
          </h2>

          <Code file='code_data_table' />

          <p>
            <b>
              Empty data&hellip;
            </b>
          </p>

          <DataTable
            columns={fake.dataTableCols()}
            data={[]}
          />

          <p>
            <b>
              Dummy data&hellip;
            </b>
          </p>

          <DataTable
            columns={fake.dataTableCols()}
            data={fake.dataTableRows(250)}
          />

          <hr />

          <h2>
            Tabs
          </h2>

          <Code file='code_tabs' />

          <Tabs selected={0}>
            <TabPanel label='Foo'>
              <p>
                Tab content for "Foo"
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel label='Bar'>
              <p>
                Tab content for "Bar"
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel label='Baz'>
              <p>
                Tab content for "Baz"
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
          </Tabs>

          <hr />

          <h2>
            Images
          </h2>

          <p>
            <code>&lt;Image /&gt;</code>
            <br />
            <Image />
          </p>

          <p>
            <code>&lt;Image width='728' height='90' /&gt;</code>
            <br />
            <Image width='728' height='90' />
          </p>

          <p>
            <code>&lt;Image width='100%' height='10%' alt='Alt Text Here' /&gt;</code>
            <br />
            <Image width='100%' height='10%' alt='Alt Text Here' />
          </p>

          <hr />

          <h2>
            Figures
          </h2>

          <GridContainer>

            <Grid desktop='33' tablet='33'>
              <code>
                &lt;ImageFigure
                  <br />
                  &nbsp;&nbsp;width='100%'
                  <br />
                  &nbsp;&nbsp;height='69.1642651%'
                  <br />
                /&gt;
              </code>
              <br />
              <ImageFigure width='100%' height='69.1642651%' />
            </Grid>

            <Grid desktop='33' tablet='33'>
              <code>
                &lt;ImageFigure
                  <br />
                  &nbsp;&nbsp;width='1041'
                  <br />
                  &nbsp;&nbsp;height='720'
                  <br />
                /&gt;
              </code>
              <br />
              <ImageFigure width='1041' height='720' />
            </Grid>

            <Grid desktop='33' tablet='33'>
              <code>
                &lt;ImageFigure
                  <br />
                  &nbsp;&nbsp;caption='Pluto'
                  <br />
                  &nbsp;&nbsp;src='pluto.jpg'
                  <br />
                /&gt;
              </code>
              <br />
              <ImageFigure
                caption='Pluto'
                src='http://www.nasa.gov/sites/default/files/thumbnails/image/nh-pluto-in-false-color.jpg'
              />
            </Grid>

          </GridContainer>

          <hr />

          <h2>
            Form Elements
          </h2>

          <h3>
            Text Input
          </h3>

          <p>
            <label htmlFor='_example_input_width_auto'>
              <code>&lt;Input width='auto' /&gt;</code>
            </label>
            <br />
            <Input id='_example_input_width_auto' width='auto' />
          </p>

          <p>
            <label htmlFor='_example_input'>
              <code>&lt;Input /&gt;</code>
            </label>
            <br />
            <Input id='_example_input' />
          </p>

          <h3>
            Select Input
          </h3>

          <p>
            <label htmlFor='_example_select_width_auto'>
              <code>&lt;Select width='auto' /&gt;</code>
            </label>
            <br />
            <Select id='_example_select_width_auto' width='auto' />
          </p>

          <p>
            <label htmlFor='_example_select'>
              <code>&lt;Select /&gt;</code>
            </label>
            <br />
            <Select id='_example_select' />
          </p>

          <h3>
            Textarea
          </h3>

          <p>
            <label htmlFor='_example_textarea'>
              <code>&lt;Textarea /&gt;</code>
            </label>
            <br />
            <Textarea
              id='_example_textarea'
              placeholder='Textarea'
            />
          </p>

          <p>
            <label htmlFor='_example_textarea'>
              <code>&lt;Textarea /&gt;</code>
            </label>
            <br />
            <Textarea
              id='_example_textarea_disabled'
              placeholder='Textarea  (Disabled)'
              disabled
            />
          </p>

          <h3>
            Editable <code>&lt;div&gt;</code>
          </h3>

          <code>&lt;Textdiv /&gt;</code>
          <br />
          <Textdiv placeholder='Content editable <div>' />

          <code>&lt;Textdiv disabled /&gt;</code>
          <br />
          <Textdiv placeholder='Content editable <div> (Disabled)' disabled />

          <h3>
            Checkbox
          </h3>

          <p>
            <Checkbox />
          </p>

          <CheckboxList />

          <CheckboxListInline />

          <h3>
            Radio
          </h3>

          <p>
            <Radio />
          </p>

          <RadioList />

          <RadioListInline />

          <h3>
            Buttons
          </h3>

          <p>
            <Button size='small' />
            <Button size='small' text='Cancel' />
            <Button size='small' text='Disabled' disabled />
          </p>

          <p>
            <Button />
            <Button text='Cancel' />
            <Button text='Disabled' disabled />
          </p>

          <p>
            <Button size='big' />
            <Button size='big' text='Cancel' />
            <Button size='big' text='Disabled' disabled />
          </p>

        </Main>

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
