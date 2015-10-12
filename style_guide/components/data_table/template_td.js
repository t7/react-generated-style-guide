// Dependencies.
import React from 'react'
import { FormattedDate, FormattedNumber } from 'react-intl'

// CSS.
import style from '../../css/_t7-data-table.css'

// Utility methods.
import utils from '../../utils'

// Define class.
class DataTableCell extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const index = this.props.index
    const type = this.props.type

    const isCurrency = type === 'currency'
    const isDate = type === 'date'

    var value = this.props.value
    const isNegative = value < 0

    // Used in conditional.
    var className = style['t7-data-table__td']

    // Currency value?
    if (isCurrency) {
      className = style['t7-data-table__td--currency']

      // Negative?
      if (isNegative) {
        className = style['t7-data-table__td--negative']
        value = value * -1
      }

      value = (
        <FormattedNumber
          value={value}
          style='currency'
          currency='USD'
        />
      )

    // Date value?
    } else if (isDate) {
      value = (
        <FormattedDate
          value={value}
          day='numeric'
          month='long'
          year='numeric'
        />
      )
    }

    // Used in conditional.
    var td

    /*
      NOTE: Handling negative values this way, rather than
      a simple string concatenation, because the result of
      `<FormattedNumber />` is an object. So, we can't do:

        value = '(' + value + ')'

      Because the output would be "([Object object])".
    */
    if (isCurrency && isNegative) {
      // Wrap in parenthesis.
      td = (
        <td key={index} className={className} role='gridcell'>
          ({value})
        </td>
      )

    // Otherwise, leave value as-is.
    } else {
      td = (
        <td key={index} className={className} role='gridcell'>
          {value}
        </td>
      )
    }

    // Expose `<td>`.
    return td
  }
}

// Validation.
DataTableCell.propTypes = {
  index: React.PropTypes.number,
  type: React.PropTypes.string,
  value: utils.alphanumeric
}

// Export.
export default DataTableCell
