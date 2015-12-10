This component can be used like so.

```js
const menuAlign = 'right' // Default: "left".
const target = '_blank' // Default: null.
const text = 'Dropdown Trigger Text'

const items = [
  {
    text: 'Dropdown Item Text #1'
  },
  {
    text: 'Dropdown Item Text #2'
  }
]

function handleClick (e, text) {
  /*
    `e` is the event.

    `text` is from the item clicked.
  */
}
```

```xml
<DropDown
  menuAlign='right'
  target={target}
  text={text}
  items={items}

  handleClick={handleClick}
/>
```