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

// Shared scope.
var that

// Define class.
class DataTable extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Alias to parent class.
    that = this

    // Apply to `state`, because we
    // don't want to mutate `props`.
    this.state = {}
    this.state.columns = this.props.columns
    this.state.data = this.props.data
  }

  // Sort table data.
  tableSort (index, direction) {
    index = parseFloat(index)

    // Loop through columns.
    this.state.columns.forEach(function (column, i) {
      // Correct column?
      if (i === index) {
        column.sort_direction = direction

      // Do cleanup.
      } else {
        delete column.sort_direction
      }
    })

    // Loop through data.
    this.state.data = _.sortBy(this.state.data, function (arr) {
      return arr[index]
    })

    if (direction === 'desc') {
      this.state.data.reverse()
    }
  }

  // Handle column header clicks.
  onClick (e) {
    const el = e.target
    const index = el.getAttribute('data-index')

    var direction = el.getAttribute('data-sort-direction')

    // Reverse.
    if (direction === 'asc') {
      direction = 'desc'
    } else {
      direction = 'asc'
    }

    // Sort the data.
    that.tableSort(index, direction)

    // Re-render the table.
    that.forceUpdate()
  }

  // Render method.
  render () {
    const columns = this.state.columns
    const data = this.state.data

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
                    sort_direction={sort_direction}
                    sortable={sortable}
                    onClick={that.onClick}
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
  columns: React.PropTypes.array,
  data: React.PropTypes.array
}

// Defaults.
DataTable.defaultProps = utils.buildFakeData()

// Export.
export default DataTable
