// Dependencies.
import React from 'react'

// UI Components.
import Button from '../form_button/template'
import ListInline from '../list_inline/template'

// Define class.
class ButtonExample extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <div>

        <ListInline>
          <li>
            <Button size='small' text='Default' />
          </li>
          <li>
            <Button size='small' mode='primary' text='Primary' />
          </li>
          <li>
            <Button size='small' mode='positive' text='Positive' />
          </li>
          <li>
            <Button size='small' mode='negative' text='Negative' />
          </li>
          <li>
            <Button size='small' mode='warn' text='Warn' />
          </li>
        </ListInline>

        <ListInline>
          <li>
            <Button text='Default' />
          </li>
          <li>
            <Button mode='primary' text='Primary' />
          </li>
          <li>
            <Button mode='positive' text='Positive' />
          </li>
          <li>
            <Button mode='negative' text='Negative' />
          </li>
          <li>
            <Button mode='warn' text='Warn' />
          </li>
        </ListInline>

        <ListInline>
          <li>
            <Button size='big' text='Default' />
          </li>
          <li>
            <Button size='big' mode='primary' text='Primary' />
          </li>
          <li>
            <Button size='big' mode='positive' text='Positive' />
          </li>
          <li>
            <Button size='big' mode='negative' text='Negative' />
          </li>
          <li>
            <Button size='big' mode='warn' text='Warn' />
          </li>
        </ListInline>

      </div>
    )
  }
}

// Export.
export default ButtonExample
