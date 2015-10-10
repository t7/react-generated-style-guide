// Dependencies.
import React from 'react'

// Define class.
class TabPanel extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }
}

TabPanel.propTypes = {
  children: React.PropTypes.node,
  label: React.PropTypes.string
}

// Export.
export default TabPanel
