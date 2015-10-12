// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-data-table.css'

// Utility methods.
import utils from '../../utils'

// UI components.
import Button from '../form_button/template'
import Select from '../form_select/template'

// Define class.
class DataTablePagination extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Handle `button` clicks.
  handlePagination (e, page) {
    const handlePagination = this.props.handlePagination

    if (typeof handlePagination !== 'function') {
      return
    }

    page = parseFloat(page)
    handlePagination(e, page)
    this.focusOtherButton(e)
  }

  focusOtherButton (e) {
    var timer = function () {
      clearTimeout(timer)

      const el = e.target
      const tag = el.tagName.toLowerCase()
      const isButton = tag === 'button'
      const isDisabled = isButton && el.disabled

      // Is this button now disabled?
      if (isDisabled) {
        el
        .parentNode
        .querySelector('button:not([disabled])')
        .focus()
      }
    }

    setTimeout(timer, 16)
  }

  // Render method.
  render () {
    const ariaControls = this.props.ariaControls

    // Page count.
    const pageCurrent = this.props.pageCurrent
    const pageTotal = this.props.pageTotal

    // Events.
    const handlePagination = this.handlePagination.bind(this)

    // Disable buttons?
    const disablePrev = pageCurrent === 0
    const disableNext = pageCurrent === pageTotal - 1

    // Button data.
    var buttonDataPrev = pageCurrent - 1
    var buttonDataNext = pageCurrent + 1

    // Too low?
    if (buttonDataPrev < 0) {
      buttonDataPrev = 0
    }

    // Too high?
    if (buttonDataNext > pageTotal - 1) {
      buttonDataNext = pageTotal - 1
    }

    // Build `<select>` options.
    var selectOptions = []
    var i

    for (i = 0; i < pageTotal; i++) {
      selectOptions.push({
        value: i,
        name: 'Page ' + (i + 1)
      })
    }

    // Hide initially.
    var ariaHidden = true
    var className = style['t7-data-table__pagination--hidden']

    // Show the UI?
    if (pageTotal > 1) {
      ariaHidden = false
      className = style['t7-data-table__pagination']
    }

    return (
      <div
        aria-hidden={ariaHidden}
        aria-label='Pagination'
        className={className}
      >
        <span className={style['t7-data-table__pagination__label']}>
          Page {pageCurrent + 1} of {pageTotal}
        </span>
        <Select
          ariaControls={ariaControls}
          width='auto'
          handleChange={handlePagination}
          options={selectOptions}
          value={pageCurrent + ''}
        />
        <Button
          ariaControls={ariaControls}
          buttonData={buttonDataPrev}
          disabled={disablePrev}
          text='Prev'
          title='Previous Page'
          width='auto'
          handleClick={handlePagination}
        />
        <Button
          ariaControls={ariaControls}
          buttonData={buttonDataNext}
          disabled={disableNext}
          text='Next'
          title='Next Page'
          width='auto'
          handleClick={handlePagination}
        />
      </div>
    )
  }
}

// Validation.
DataTablePagination.propTypes = {
  ariaControls: React.PropTypes.string,
  handlePagination: React.PropTypes.func,
  pageCurrent: React.PropTypes.number,
  pageTotal: React.PropTypes.number
}

// Defaults.
DataTablePagination.defaultProps = {
  pageCurrent: 0,

  handlePagination: function (e, page) {
    utils.log(e, page)
  }
}

// Export.
export default DataTablePagination
