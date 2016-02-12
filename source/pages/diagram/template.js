// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// App components.
import App from '../../layouts/app'

// Misc components.
import Grid from '../../components_misc/unsemantic/grid_unit'
import GridContainer from '../../components_misc/unsemantic/grid_container'

// UI components.
import TreeDiagram from '../../components/tree_diagram/template'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Set page title.
    utils.title(props)

    // Get default state.
    this.defaultState()

    // Get tree data.
    this.getTreeData()
  }

  // Apply to `state`, because we
  // don't want to mutate `props`.
  defaultState () {
    const state = {
      data: {}
    }

    // If state exists, reset it.
    if (typeof this.state === 'object') {
      this.setState(state)

    // Otherwise, create state.
    } else {
      this.state = state
    }
  }

  // Get tree data.
  getTreeData () {
    const setState = this.setState.bind(this)
    const url = './static/json/tree_diagram.json'

    window
      // Send request.
      .fetch(url)

      // Process response.
      .then(function (response) {
        return response.json()
      })

      // Use JSON data.
      .then(function (data) {
        setState({
          data: data
        })
      })
  }

  // Render method.
  render () {
    const data = this.state.data

    return (
      <App>

        <GridContainer>

          <Grid desktop='100'>

            <h1>
              Example D3.js Diagram
            </h1>

            <p className='t7-mute'>
              <b>Note:</b> Click an item to expand/collapse.
            </p>

            <hr />

            <TreeDiagram data={data} />

          </Grid>

        </GridContainer>

      </App>
    )
  }
}

// Export.
export default Page
