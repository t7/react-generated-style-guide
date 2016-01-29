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

// Event callback: menu click.
function handleClickMenu (d, index, label) {
  /*
    `d` is the D3 data object
    associated with the node.

    `index` is the numeric position.

    `label` is the text itself.
  */
}

// Event callback: node click.
function handleClickNode (d) {
  /*
    `d` is the D3 data object
    associated with the node.
  */
}

// Event callback: expand/collapse toggle.
function handleClickToggle (d, isActive) {
  /*
    `d` is the D3 data object
    associated with the node.

    `isActive` denotes expand/collapse state.
  */
}
```

```xml
<TreeDiagram
  data={data}

  handleClickMenu={handleClickMenu}
  handleClickNode={handleClickNode}
  handleClickToggle={handleClickToggle}
/>
```