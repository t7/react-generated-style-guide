This component can be used like so.

```js
// Event callback.
function handleChange (e, value) {
  /*
    `e` is the event.

    `value` is the *.value of the select.
  */
}

const ariaControls = '...' // Default: null.
const autofocus = true // Default: false.
const disabled = true // Default: false.
const id = '...' // Ensured unique, if blank.
const name = '...' // Uses id, if blank.
const required = true // Default: false.
const width = 'auto' // Default: 100%.

// Determines selected option.
const defaultValue = '...' // Default: null.
const value = '...' // Default: null.

const options = [
  {
    value: '',
    name: 'Select...'
  },
  {
    value: '1',
    name: 'Uno'
  },
  {
    value: '2',
    name: 'Dos'
  },
  {
    value: '3',
    name: 'Tres'
  }
]
```

**Note:** There is a difference between `value` and `defaultValue`. For more info, see the React documentation for…

* [Controlled Components](https://facebook.github.io/react/docs/forms.html#controlled-components)
* [Uncontrolled Components](https://facebook.github.io/react/docs/forms.html#uncontrolled-components)

To use the component, pass these props.

```xml
<Select
  ariaControls={ariaControls}
  autofocus={autofocus}
  disabled={disabled}
  id={id}
  name={name}
  required={required}

  defaultValue={defaultValue}
  value={value}

  handleChange={handleChange}
/>
```