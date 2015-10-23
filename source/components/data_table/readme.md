This component can be used like so:

```
const columns = [
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

const data = [
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
]

<DataTable
  columns={columns}
  data={data}
  pageTop
  pageBottom={false}
  pageSize={20}
  sortIndex={0}
  sortDirection='desc'
/>
```