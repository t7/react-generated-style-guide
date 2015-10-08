// Dependencies.
import utils from './index'

export default function (count, balance) {
  // Number of rows to generate.
  count = count || 20

  // Starting balance.
  balance = balance || 20000

  // Random currency.
  function generateCurrency (negative) {
    var modifier = 1

    if (negative) {
      modifier = -1
    }

    var num = Math.random()
    num = num * 1000
    num = num * modifier

    return num
  }

  // Generate row.
  function generateRow (i) {
    const tres = i % 3 === 0
    const amount = generateCurrency(tres)

    const description = tres
      ? 'Lorem ipsum dolor sit amet...'
      : 'Ut enim ad minim veniam...'

    const category = tres
      ? 'Expense'
      : 'Revenue'

    return [
      utils.today(-i),
      description,
      category,
      amount,
      balance += amount
    ]
  }

  // Columns.
  const columns = [
    {
      label: 'Date',
      type: 'date',
      sortable: true
    },
    {
      label: 'Description',
      sortable: true
    },
    {
      label: 'Category',
      sortable: true
    },
    {
      label: 'Amount',
      type: 'currency',
      sortable: true
    },
    {
      label: 'Balance',
      type: 'currency'
    }
  ]

  // Used in loop.
  var data = []

  // Build rows.
  for (var i = 0; i < count; i++) {
    let row = generateRow(i)

    data.push(row)
  }

  // Expose object.
  return {
    sortIndex: 0,
    sortDirection: 'desc',
    columns: columns,
    data: data
  }
}
