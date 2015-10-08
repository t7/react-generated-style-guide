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

    this.state = {}
    this.state.columns = this.props.columns
    this.state.data = this.props.data

    // Pre-sort the data.
    this.preSort()
  }

  // Pre-sort the data.
  preSort () {
    this.state.columns.forEach(function (column, index) {
      var direction = column.sort_direction

      if (!direction) {
        direction = 'desc'
      }

      if (column.sort) {
        that.tableSort(index, direction)
      }
    })
  }

  tableSort (index, direction) {
    index = parseFloat(index)

    const notSortable = !this.state.columns[index].sortable

    // Exit, if not sortable.
    if (notSortable) {
      return
    }

    // Loop through columns.
    this.state.columns.forEach(function (column, i) {
      // Correct column?
      if (i === index) {
        column.sort = true
        column.sort_direction = direction

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

    if (direction === 'desc') {
      this.state.data.reverse()
    }
  }

  onClick (e) {
    const el = e.target
    const index = el.getAttribute('data-index')

    var direction = el.getAttribute('data-sort-direction')

    // Reverse.
    if (direction === 'desc') {
      direction = 'asc'
    } else {
      direction = 'desc'
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
DataTable.defaultProps = utils.buildFakeData(20)

// Export.
export default DataTable
