// Dependencies.
import React from 'react'
import _ from 'lodash'

// CSS.
import style from '../../css/_t7-data-table.css'

// Utility methods.
import utils from '../../utils'

// UI components.
import DataTableRow from './template_tr'
import DataTableHeader from './template_th'

// Define class.
class DataTable extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Get default state.
    this.defaultState()
  }

  // Apply to `state`, because we
  // don't want to mutate `props`.
  defaultState () {
    const state = {
      sortIndex: this.props.sortIndex,
      sortDirection: this.props.sortDirection
    }

    // If state exists, reset it.
    if (typeof this.state === 'object') {
      this.setState(state)

    // Otherwise, create state.
    } else {
      this.state = state
    }
  }

  // Sort table data.
  tableSort (index) {
    // Ensure index exists.
    if (!utils.exists(index)) {
      return this.props.data
    }

    // Loop through data.
    var data = _.sortBy(this.props.data, function (arr) {
      return arr[index]
    })

    if (this.state.sortDirection === 'desc') {
      data.reverse()
    }

    return data
  }

  // Handle column header clicks.
  handleClick (e, index, direction) {
    // Reverse.
    if (direction === 'asc') {
      direction = 'desc'
    } else {
      direction = 'asc'
    }

    this.setState({
      sortDirection: direction,
      sortIndex: index
    })
  }

  // Render method.
  render () {
    const columns = this.props.columns
    const handleClick = this.handleClick.bind(this)

    // Read from state.
    const sortIndex = this.state.sortIndex
    const sortDirection = this.state.sortDirection

    // Sort the data.
    const data = this.tableSort(this.state.sortIndex)

    return (
      <table className={style['t7-data-table']}>
        <thead>
          <tr>
            {
              columns.map(function ({label, sort, sort_direction, sortable}, i) {
                return (
                  <DataTableHeader
                    key={i}
                    index={i}
                    label={label}
                    sort={sort}
                    sortIndex={sortIndex}
                    sortDirection={sortDirection}
                    sortable={sortable}
                    handleClick={handleClick}
                  />
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map(function (data, i) {
              return (
                <DataTableRow key={i} columns={columns} data={data} />
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

// Validation.
DataTable.propTypes = {
  sortIndex: React.PropTypes.number,
  sortDirection: React.PropTypes.string,
  columns: React.PropTypes.array,
  data: React.PropTypes.array
}

// Defaults.
DataTable.defaultProps = utils.buildFakeData()

// Export.
export default DataTable
