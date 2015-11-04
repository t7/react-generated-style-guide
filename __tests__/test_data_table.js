/*global
describe
expect
it
jest
*/

// Disable auto mocking.
jest.autoMockOff()

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const DataTable = require('../source/components/data_table/template')

// Fake data.
const fake = require('../source/fake')
const columns = fake.dataTableCols()
const data = fake.dataTableRows(35)

// Describe `<Component/>` name.
describe('DataTable', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <DataTable
    columns={columns}
    data={data}

    pageTop
    pageBottom
    pageSize={20}
    sortIndex={0}
    />
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-data-table__wrapper')

  // Get column headers.
  const thead = parent.querySelector('thead')
  const th = thead.querySelectorAll('th')

  // Get the rows.
  const tbody = parent.querySelector('tbody')

  // Get pagination.
  const pagination = parent.querySelectorAll('.t7-data-table__pagination')

  // ========================
  // Pagination: top, bottom.
  // ========================

  const paginationTop = pagination[0]
  const paginationBottom = pagination[1]

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ==============
  // Test for rows.
  // ==============

  it('has rows present', function () {
    // Ensure 20 initial rows.
    expect(tbody.querySelectorAll('tr').length).toBe(20)
  })

  // =========================
  // Ensure pagination exists.
  // =========================

  it('has pagination present', function () {
    // Top pagination.
    expect(paginationTop).toBeTruthy()

    // Bottom pagination.
    expect(paginationBottom).toBeTruthy()
  })

  // ================
  // Test page count.
  // ================

  it('has correct page count', function () {
    const options = paginationTop.querySelectorAll('option')

    // Should be two pages.
    expect(options.length).toBe(2)
  })

  // ================
  // Test pagination.
  // ================

  it('has functional pagination', function () {
    const buttons = paginationTop.querySelectorAll('button')
    const select = paginationTop.querySelector('select')

    // =============
    // Click "Next".
    // =============

    T.Simulate.click(buttons[1])

    // Buttons enabled/disabled?
    expect(buttons[0].disabled).toBe(false)
    expect(buttons[1].disabled).toBe(true)

    // Check `<select>` value.
    expect(select.value).toBe('1')

    // Ensure 15 rows.
    expect(tbody.querySelectorAll('tr').length).toBe(15)

    // =============
    // Click "Prev".
    // =============

    T.Simulate.click(buttons[0])

    // Buttons enabled/disabled?
    expect(buttons[0].disabled).toBe(true)
    expect(buttons[1].disabled).toBe(false)

    // Check `<select>` value.
    expect(select.value).toBe('0')

    // Ensure 20 rows.
    expect(tbody.querySelectorAll('tr').length).toBe(20)
  })

  // =================
  // Test column sort.
  // =================

  it('has sortable columns', function () {
    // Click column header.
    T.Simulate.click(th[1])

    // Column sorted: ascending.
    expect(th[1].getAttribute('aria-sort')).toBe('ascending')

    // Click column header.
    T.Simulate.click(th[1])

    // Column sorted: descending.
    expect(th[1].getAttribute('aria-sort')).toBe('descending')
  })
})
