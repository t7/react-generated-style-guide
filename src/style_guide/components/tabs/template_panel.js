// Dependencies.
import React from 'react'

// Define class.
class TabPanel extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return this.props.children
  }
}

TabPanel.propTypes = {
  children: React.PropTypes.node,
  label: React.PropTypes.string
}

// Export.
export default TabPanel
