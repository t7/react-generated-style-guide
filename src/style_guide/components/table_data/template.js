// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-table.css'

// Define class.
class DataTable extends React.Component {

  // Render method.
  render () {
    const columns = this.props.columns
    const data = this.props.data

    return (
      <table className={style['t7-table--data']}>
        <thead>
          <tr>
            {
              columns.map(({key, value}) => {
                return (
                  <th key={key}>
                    {value}
                  </th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((arr, i) => {
              return (
                <tr key={i}>
                  {
                    arr.map(({key, value}, i) => {
                      return (
                        <td key={i}>
                          {value}
                        </td>
                      )
                    })
                  }
                </tr>
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
DataTable.defaultProps = {
  columns: [
    {
      key: 'col_1',
      value: 'Column 1'
    },
    {
      key: 'col_2',
      value: 'Column 2'
    },
    {
      key: 'col_3',
      value: 'Column 3'
    },
    {
      key: 'col_4',
      value: 'Column 4'
    },
    {
      key: 'col_5',
      value: 'Column 5'
    }
  ],
  data: [
    [
      {
        key: 'col_1',
        value: 'Row 1, Col 1'
      },
      {
        key: 'col_2',
        value: 'Row 1, Col 2'
      },
      {
        key: 'col_3',
        value: 'Row 1, Col 3'
      },
      {
        key: 'col_4',
        value: 'Row 1, Col 4'
      },
      {
        key: 'col_5',
        value: 'Row 1, Col 5'
      }
    ],
    [
      {
        key: 'col_1',
        value: 'Row 2, Col 1'
      },
      {
        key: 'col_2',
        value: 'Row 2, Col 2'
      },
      {
        key: 'col_3',
        value: 'Row 2, Col 3'
      },
      {
        key: 'col_4',
        value: 'Row 2, Col 4'
      },
      {
        key: 'col_5',
        value: 'Row 2, Col 5'
      }
    ],
    [
      {
        key: 'col_1',
        value: 'Row 3, Col 1'
      },
      {
        key: 'col_2',
        value: 'Row 3, Col 2'
      },
      {
        key: 'col_3',
        value: 'Row 3, Col 3'
      },
      {
        key: 'col_4',
        value: 'Row 3, Col 4'
      },
      {
        key: 'col_5',
        value: 'Row 3, Col 5'
      }
    ],
    [
      {
        key: 'col_1',
        value: 'Row 4, Col 1'
      },
      {
        key: 'col_2',
        value: 'Row 4, Col 2'
      },
      {
        key: 'col_3',
        value: 'Row 4, Col 3'
      },
      {
        key: 'col_4',
        value: 'Row 4, Col 4'
      },
      {
        key: 'col_5',
        value: 'Row 4, Col 5'
      }
    ],
    [
      {
        key: 'col_1',
        value: 'Row 5, Col 1'
      },
      {
        key: 'col_2',
        value: 'Row 5, Col 2'
      },
      {
        key: 'col_3',
        value: 'Row 5, Col 3'
      },
      {
        key: 'col_4',
        value: 'Row 5, Col 4'
      },
      {
        key: 'col_5',
        value: 'Row 5, Col 5'
      }
    ]
  ]
}

// Export.
export default DataTable
