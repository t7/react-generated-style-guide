// Dependencies.
import React from 'react'

// Define class.
class AccordionPanel extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }
}

// Validation.
AccordionPanel.propTypes = {
  children: React.PropTypes.node,
  label: React.PropTypes.string
}

// Export.
export default AccordionPanel
