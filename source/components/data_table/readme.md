This component can be used like so.

<pre class="language-javascript"><code>
/*
  You would likely get this data from an API,
  but for this example, these are hard-coded
  arrays for the columns and data (rows).
*/

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
  ]
]
</code></pre>

To use the component, pass these props.

**Note:** The following example shows the defaults for each prop. Meaning, `pageTop` is default. If you want pagination on the bottom, you could set `pageTop={false}` and `pageBottom={true}`.

```
<DataTable
  columns={columns}
  data={data}

  pageTop={true}
  pageBottom={false}
  pageSize={20}
  sortIndex={0}
  sortDirection='desc'
/>
```