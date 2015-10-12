/*

//======================================
// Generates fake data in this format...
//======================================

[
  {
    "label": "Date",
    "type": "date",
    "sortable": true
  },
  {
    "label": "Description",
    "sortable": true
  },
  {
    "label": "Category",
    "sortable": true
  },
  {
    "label": "Amount",
    "type": "currency",
    "sortable": true
  },
  {
    "label": "Balance",
    "type": "currency"
  }
]

*/

export default function () {
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

  // Expose object.
  return columns
}
