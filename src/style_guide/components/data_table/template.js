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

    that = this

    this.state = {}
    this.state.columns = this.props.columns
    this.state.data = this.props.data
  }

  tableSort (index) {
    index = parseFloat(index)

    const notSortable = !this.state.columns[index].sortable

    // Exit, if not sortable.
    if (notSortable) {
      return
    }

    var sortDirection = 'desc'

    // Loop through columns.
    this.state.columns.forEach(function (column, i) {
      // Correct column?
      if (i === index) {
        column.sort = true

        // Check sort direction.
        if (column.sort_direction === 'desc') {
          // Reverse sort direction.
          sortDirection = 'asc'

        // Apply sort direction.
        } else {
          sortDirection = 'desc'
        }

        column.sort_direction = sortDirection

      // Do cleanup.
      } else {
        delete column.sort
        delete column.sort_direction
      }
    })

    // Loop through data.
    this.state.data = _.sortBy(this.state.data, function (arr) {
      return arr[index].value
    })

    if (sortDirection === 'desc') {
      this.state.data.reverse()
    }

    // Re-render the table.
    this.forceUpdate()
  }

  onClick (e) {
    const index = e.target.getAttribute('data-index')

    that.tableSort(index)
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
              columns.map(function ({value, sort, sort_direction, sortable}, i) {
                return (
                  <DataTableHeader
                    key={i}
                    index={i}
                    value={value}
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
                <DataTableRow key={i} data={data} />
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
