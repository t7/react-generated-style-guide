// Dependencies.
import React from 'react'
import _ from 'lodash'

// CSS.
import './t7-d3-tree-diagram.css'

// D3 chart.
import Chart from './d3_chart'

// UI components.
import Button from '../form_button/template'
import ListInline from '../list_inline/template'

// Define class.
class TreeDiagram extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Initial call to D3.
  componentDidMount () {
    const data = _.cloneDeep(this.props.data)

    // Create chart instance.
    this.chart = new Chart(this.refs.el, this.props)
    this.chart.render(data)
  }

  // Updates the D3 chart.
  componentDidUpdate () {
    const data = _.cloneDeep(this.props.data)

    this.chart.render(data)
  }

  // Destroys the D3 chart.
  componentWillUnmount () {
    this.chart.destroy()
  }

  // Collapse all items.
  collapseAll (e) {
    if (this.chart) {
      this.chart.collapseAll()
    }
  }

  // Expand all items.
  expandAll (e) {
    if (this.chart) {
      this.chart.expandAll()
    }
  }

  // Reset the view.
  resetView (e) {
    const data = _.cloneDeep(this.props.data)

    if (this.chart) {
      this.chart.render(data)
    }
  }

  // Render method.
  render () {
    const data = this.props.data
    const collapseAll = this.collapseAll.bind(this)
    const expandAll = this.expandAll.bind(this)
    const resetView = this.resetView.bind(this)

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
      <div className='t7-d3-tree-diagram'>
        <ListInline>
          <li>
            <Button
              text='Expand All'
              handleClick={expandAll}
            />
          </li>
          <li>
            <Button
              text='Collapse All'
              handleClick={collapseAll}
            />
          </li>
          <li>
            <Button
              text='Reset View'
              handleClick={resetView}
            />
          </li>
        </ListInline>
        <div
          className='t7-d3-tree-diagram__frame'
          ref='el'
        >
          {loadingMessage}
        </div>
      </div>
    )
  }
}

// Validation.
TreeDiagram.propTypes = {
  data: React.PropTypes.object,
  handleClickNode: React.PropTypes.func,
  handleClickMenu: React.PropTypes.func
}

// Defaults.
TreeDiagram.defaultProps = {
  // Animation duration.
  duration: 500,

  // Base rectangle width.
  rectW: 280,

  // Base rectangle height.
  rectH: 120,

  // Menu item height.
  itemH: 30,

  // Menu data.
  menu: {
    /*
      NOTE: These keys correspond
      to each object's `*.type`.
    */
    superHouse: [
      {
        text: 'Add: Household'
      },
      {
        text: 'View/Edit: Super House Details'
      }
    ],
    household: [
      {
        text: 'Add: Tax Entity'
      },
      {
        text: 'View/Edit: Household Details'
      }
    ],
    taxEntity: [
      {
        text: 'Add: Single Account'
      },
      {
        text: 'Add: PCR Data Services Accounts'
      },
      {
        text: 'Add: Firm/Office Managed Accounts'
      },
      {
        text: 'View/Edit: Tax Entity Details'
      }
    ]
  },

  // Fake data.
  data: require('../../static/json/tree_diagram.json')
}

// Export.
export default TreeDiagram
