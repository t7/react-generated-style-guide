// Dependencies.
import React from 'react'

// UI Components.
import Button from '../form_button/template'

// CSS.
import style from '../../css/t7-list.css'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const list = style['t7-list--inline']

    return (
      <div>

        <ul className={list}>
          <li>
            <Button size='small' />
          </li>
          <li>
            <Button size='small' mode='primary' />
          </li>
          <li>
            <Button size='small' mode='positive' />
          </li>
          <li>
            <Button size='small' mode='negative' />
          </li>
        </ul>

        <ul className={list}>
          <li>
            <Button />
          </li>
          <li>
            <Button mode='primary' />
          </li>
          <li>
            <Button mode='positive' />
          </li>
          <li>
            <Button mode='negative' />
          </li>
        </ul>

        <ul className={list}>
          <li>
            <Button size='big' />
          </li>
          <li>
            <Button size='big' mode='primary' />
          </li>
          <li>
            <Button size='big' mode='positive' />
          </li>
          <li>
            <Button size='big' mode='negative' />
          </li>
        </ul>

      </div>
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
