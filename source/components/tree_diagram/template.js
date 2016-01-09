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
  data: React.PropTypes.object
}

// Defaults.
TreeDiagram.defaultProps = {
  data: {
    name: '1A',
    children: [
      {
        name: '1A-2A',
        children: [
          {
            name: '1A-2A-3A'
          },
          {
            name: '1A-2A-3B'
          }
        ]
      },
      {
        name: '1A-2B',
        children: [
          {
            name: '1A-2B-3A'
          },
          {
            name: '1A-2B-3B'
          }
        ]
      }
    ]
  }
}

// Export.
export default TreeDiagram
