// Dependencies.
import React from 'react'

// UI Components.
import DataTable from '../../components/data_table/template'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <DataTable />
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
