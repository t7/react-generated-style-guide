// Dependencies.
import React from 'react'

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
    this.chart = new Chart(this.refs.el)
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
    return (
      <div
        className='t7-d3-tree-diagram'
        ref='el'
      />
    )
  }
}

// Validation.
TreeDiagram.propTypes = {
  data: React.PropTypes.object
}

// Defaults.
TreeDiagram.defaultProps = {

}

// Export.
export default TreeDiagram
