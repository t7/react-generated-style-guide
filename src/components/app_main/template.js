// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-app.css'

// Utility methods.
import utils from '../../utils'

// UI components.
import Button from '../form_button/template'
import Checkbox from '../form_checkbox/template'
import CheckboxList from '../form_checkbox/template_list'
import CheckboxListInline from '../form_checkbox/template_list_inline'
import Input from '../form_input/template'
import Radio from '../form_radio/template'
import RadioList from '../form_radio/template_list'
import RadioListInline from '../form_radio/template_list_inline'
import Select from '../form_select/template'

// Define class.
class Main extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Automatically called after `render`.
  componentDidMount () {
    utils.log('Component Mounted: "/app_main/template"')
  }

  onChange (e, value, checked) {

  }

  // Render method.
  render () {
    return (
      <main className={style['t7-app__main']} role='main'>

        <h1>
          {this.props.main}
        </h1>

        <hr />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <hr />

        <p>
          <Select />
        </p>

        <p>
          <label htmlFor='_example_text_input'>
            Text input label
          </label>
          <br />
          <Input id='_example_text_input' />
        </p>

        <hr />

        <p>
          <Checkbox />
        </p>

        <CheckboxList />

        <CheckboxListInline />

        <hr />

        <p>
          <Radio />
        </p>

        <RadioList />

        <RadioListInline />

        <hr />

        <p>
          <Button />
          <Button text='Cancel' />
          <Button text='Disabled' disabled />
        </p>

      </main>
    )
  }
}

// Validation.
Main.propTypes = {
  main: React.PropTypes.string
}

// Export.
export default Main
