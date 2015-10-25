This component can be used like so.

```js
function handleChange (e, value, checked) {
  /*
    `e` is the event.

    `value` is the *.value of the radio.

    `checked` is a boolean.
  */
}

/*
  For radio `name="..."` attributes.

  Can define at the individual `options`
  level, or just define once for the list.
*/
const listName = '...'

const options = [
  {
    autofocus: true, // Default: false.
    checked: true, // Default: false.
    defaultChecked: true, // Default: false.
    disabled: true, // Default: false.
    id: '...', // Ensured unique, if blank.
    label: 'Radio list - label 01',
    name: '...', // Uses `listName`, if blank,
    required: true, // Default: false,
    value: '...', // Uses label, if blank.

    // Will be called when (un-)checked.
    handleChange: handleChange
  },
  {
    label: 'Radio list - label 02'
  }

  // Etc.
]
```

To use the component, pass these props.

```xml
<RadioListInline
  listName={listName}
  options={options}

  handleChange={handleChange}
/>
```