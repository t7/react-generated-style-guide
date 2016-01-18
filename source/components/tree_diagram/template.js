// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// CSS.
import './t7-d3-tree-diagram.css'

// D3 chart.
import Chart from './d3_chart'

// Define class.
class TreeDiagram extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Initial call to D3.
  componentDidMount () {
    // Create chart instance.
    this.chart = new Chart(this.refs.el, this.props)
    this.chart.render(this.props.data)
  }

  // Updates the D3 chart.
  componentDidUpdate () {
    this.chart.render(this.props.data)
  }

  // Destroys the D3 chart.
  componentWillUnmount () {
    this.chart.destroy()
  }

  // Render method.
  render () {
    const data = this.props.data

    // Set in conditional.
    var loadingMessage

    if (!data || !Object.keys(data).length) {
      loadingMessage = (
        <div className='t7-d3-tree-diagram__loading'>
          Loading…
        </div>
      )
    }

    return (
      <div
        className='t7-d3-tree-diagram'
        ref='el'
      >
        {loadingMessage}
      </div>
    )
  }
}

// Validation.
TreeDiagram.propTypes = {
  data: React.PropTypes.object,
  handleClickLeaf: React.PropTypes.func
}

// Defaults.
TreeDiagram.defaultProps = {
  handleClickLeaf: function (d) {
    utils.log(d)
  },

  handleClickMenu: function (text, data) {
    utils.log(text, data)
  },

  // Fake data.
  data: require('../../static/json/tree_diagram.json')
}

// Export.
export default TreeDiagram
