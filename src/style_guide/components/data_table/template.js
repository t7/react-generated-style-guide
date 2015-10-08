// Dependencies.
import React from 'react'
import _ from 'lodash'

// CSS.
import style from '../../css/_t7-data-table.css'

// Utility methods.
import utils from '../../utils'

// UI components.
import DataTableRow from './template_row'
import DataTableHeader from './template_header'

// Define class.
class DataTable extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Apply to `state`, because we
    // don't want to mutate `props`.
    this.state = {}
    this.state.sortIndex = this.props.sortIndex
    this.state.sortDirection = this.props.sortDirection
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
  handleClick (e, index, sortDirection) {
    // Reverse.
    if (sortDirection === 'asc') {
      this.state.sortDirection = 'desc'
    } else {
      this.state.sortDirection = 'asc'
    }

    this.state.sortIndex = index

    // Re-render the table.
    this.forceUpdate()
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
