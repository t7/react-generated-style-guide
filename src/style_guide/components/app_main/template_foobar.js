// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-app.css'

// UI components.
import Button from '../form_button/template'
import Checkbox from '../form_checkbox/template'
import CheckboxList from '../form_checkbox/template_list'
import CheckboxListInline from '../form_checkbox/template_list_inline'
import Grid from '../grid_layout/grid_unit'
import GridContainer from '../grid_layout/grid_container'
import Image from '../image_helper/template'
import ImageFigure from '../image_helper/template_figure'
import Input from '../form_input/template'
import Radio from '../form_radio/template'
import RadioList from '../form_radio/template_list'
import RadioListInline from '../form_radio/template_list_inline'
import Select from '../form_select/template'
import DataTable from '../data_table/template'
import Tabs from '../tabs/template'
import TabPanel from '../tabs/template_panel'
import Textarea from '../form_textarea/template'
import Textdiv from '../form_textdiv/template'

// Define class.
class Main extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <main className={style['t7-app__main']} role='main'>

        <h1>
          Example UI Elements
        </h1>

        <hr />

        <h2>
          Tabs
        </h2>

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
          Data Table
        </h2>

        <DataTable />

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
          <Textarea id='_example_textarea' placeholder='Textarea' />
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

      </main>
    )
  }
}

// Export.
export default Main
