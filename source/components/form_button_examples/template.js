// Dependencies.
import React from 'react'

// UI Components.
import Button from '../form_button/template'
import ListInline from '../list_inline/template'

// Define class.
class Page extends React.Component {
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
        </ListInline>

        <ListInline>
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
        </ListInline>

        <ListInline>
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
        </ListInline>

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
