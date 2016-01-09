This component is a conduit to D3.js data visualization.

It takes an object with `*.children` and creates an "org chart" looking tree.

This component can be used like so.

```js
const data = {
  name: '1A',
  children: [
    {
      name: '1A-2A',
      children: [
        {
          name: '1A-2A-3A'
        },
        {
          name: '1A-2A-3B'
        }
      ]
    },
    {
      name: '1A-2B',
      children: [
        {
          name: '1A-2B-3A'
        },
        {
          name: '1A-2B-3B'
        }
      ]
    }
  ]
}
```

```xml
<TreeDiagram data={data} />
```