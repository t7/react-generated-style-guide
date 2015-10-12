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
import DataTablePagination from './template_pagination'

// Define class.
class DataTable extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Ensure columns exist.
    const columns = this.props.columns

    if (!columns || !columns.length) {
      throw new Error('No columns were passed to `<DataTable />`.')
    }

    // Get default state.
    this.defaultState()
  }

  // Apply to `state`, because we
  // don't want to mutate `props`.
  defaultState () {
    const state = {
      pageCurrent: this.props.pageCurrent,
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

    const pageCurrent = this.state.pageCurrent
    const pageSize = this.props.pageSize
    const start = pageCurrent * pageSize
    const end = start + pageSize

    if (pageSize) {
      data = data.slice(start, end)
    }

    return data
  }

  // Handle column header sort.
  handleSort (e, index, direction) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

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

  // Handle table pagination.
  handlePagination (e, page) {
    this.setState({
      pageCurrent: page
    })
  }

  // Render method.
  render () {
    const id = this.props.id
    const columns = this.props.columns

    // Read from state.
    const sortIndex = this.state.sortIndex
    const sortDirection = this.state.sortDirection

    // Pagination sizing.
    const pageCurrent = this.state.pageCurrent
    const pageTotal = Math.ceil(this.props.data.length / this.props.pageSize)

    // Sort the data.
    const data = this.tableSort(this.state.sortIndex)

    // Events.
    const handleSort = this.handleSort.bind(this)
    const handlePagination = this.handlePagination.bind(this)

    // Used in loop.
    var rows = []

    // Populate table rows.
    data.map(function (data, i) {
      rows.push(
        <DataTableRow key={i} columns={columns} data={data} />
      )
    })

    // Empty rows?
    if (!rows.length) {
      rows.push(
        <tr role='row' key={'table_data_empty_' + id}>
          <td className={style['t7-data-table__td']} colSpan={columns.length}>
            No data to display.
          </td>
        </tr>
      )
    }

    // Put all the UI together.
    return (
      <div className={style['t7-data-table__wrapper']}>

        <DataTablePagination
          pageCurrent={pageCurrent}
          pageTotal={pageTotal}
          tableId={id}
          handlePagination={handlePagination}
        />

        <table
          id={id}
          className={style['t7-data-table']}
          role='grid'
        >

          <thead role='rowgroup'>
            <tr>
              {
                columns.map(function ({label, sort_direction, sortable}, i) {
                  return (
                    <DataTableHeader
                      key={i}
                      index={i}
                      label={label}
                      sortIndex={data.length ? sortIndex : null}
                      sortDirection={data.length ? sortDirection : null}
                      sortable={data.length ? sortable : null}
                      handleSort={handleSort}
                    />
                  )
                })
              }
            </tr>
          </thead>

          <tbody role='rowgroup'>
            {rows}
          </tbody>

        </table>

      </div>
    )
  }
}

// Validation.
DataTable.propTypes = {
  // Required.
  columns: React.PropTypes.array.isRequired,
  data: React.PropTypes.array.isRequired,

  // Optional.
  id: React.PropTypes.string,
  pageCurrent: React.PropTypes.number,
  pageSize: React.PropTypes.number,
  sortIndex: React.PropTypes.number,
  sortDirection: React.PropTypes.string
}

// Defaults.
DataTable.defaultProps = {
  id: utils.unique(),
  pageCurrent: 0,
  pageSize: 20,
  sortIndex: 0,
  sortDirection: 'desc'
}

// Export.
export default DataTable
