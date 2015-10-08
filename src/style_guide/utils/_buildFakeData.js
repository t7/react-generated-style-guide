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
    num = num.toFixed(2)
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
      {
        type: 'date',
        value: utils.today(-i)
      },
      {
        type: 'string',
        value: description
      },
      {
        type: 'string',
        value: category
      },
      {
        type: 'currency',
        value: amount
      },
      {
        type: 'currency',
        value: balance += amount
      }
    ]
  }

  // Columns.
  const columns = [
    {
      value: 'Date',
      sort: true,
      sort_direction: 'desc',
      sortable: true
    },
    {
      value: 'Description',
      sortable: true
    },
    {
      value: 'Category',
      sortable: true
    },
    {
      value: 'Amount',
      sortable: true
    },
    {
      value: 'Balance'
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
    columns: columns,
    data: data
  }
}
