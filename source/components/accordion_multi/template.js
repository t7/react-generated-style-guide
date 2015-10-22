// Dependencies.
import React from 'react'

// Utility methods.
import fake from '../../fake'

// UI components.
import Accordion from '../accordion/template'

// Define class.
class AccordionMulti extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <Accordion {...this.props} multi />
    )
  }
}

// Validation.
AccordionMulti.propTypes = {
  children: React.PropTypes.node,
  id: React.PropTypes.string,
  selected: React.PropTypes.object
}

// Defaults.
AccordionMulti.defaultProps = {
  children: fake.accordion(),
  selected: {
    0: true,
    1: true,
    2: true
  }
}

// Export.
export default AccordionMulti
