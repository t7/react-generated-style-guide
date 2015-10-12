// Dependencies.
import utils from '../utils'

/*

//======================================
// Generates fake data in this format...
//======================================

[
  [
    1444338711008,
    "Lorem ipsum dolor sit amet...",
    "Expense",
    -657.8544315416366,
    19342.145568458363
  ],
  [
    1444252311008,
    "Ut enim ad minim veniam...",
    "Revenue",
    225.9504753164947,
    19568.096043774858
  ],
  [
    1444165911008,
    "Ut enim ad minim veniam...",
    "Revenue",
    823.1116528622806,
    20391.20769663714
  ]

  // Etc.
]

*/

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
    num = num * 100
    num = num * modifier

    return num
  }

  // Generate row.
  function generateRow (i) {
    const x = i % 2 === 0
    const amount = generateCurrency(x)

    const description = x
      ? 'Lorem ipsum dolor sit amet...'
      : 'Ut enim ad minim veniam...'

    const category = x
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

  // Used in loop.
  var data = []

  // Build data.
  for (var i = 0; i < count; i++) {
    let row = generateRow(i)
    data.push(row)
  }

  // Expose object.
  return data
}
