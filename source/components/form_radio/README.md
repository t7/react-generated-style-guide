This component can be used like so.

```js
// Event callback.
function handleChange (e, value, checked) {
  /*
    `e` is the event.

    `value` is the *.value of the checkbox.

    `checked` is a boolean.
  */
}

const autoFocus = true // Default: false.
const disabled = true // Default: false.
const id = '...' // Ensured unique, if blank.
const label = 'Individual radio label' // Accompanying text.
const name = '...' // Ensured unique, if blank.
const required = true // Default: false.
const value = '...' // Uses label, if blank.

// Checked state.
const checked = true // Default: false.
const defaultChecked = true // Default: false.
```

**Note:** There is a difference between `checked` and `defaultChecked`. For more info, see the React documentation for…

* [Controlled Components](https://facebook.github.io/react/docs/forms.html#controlled-components)
* [Uncontrolled Components](https://facebook.github.io/react/docs/forms.html#uncontrolled-components)

To use the component, pass these props.

```xml
<Radio
  autoFocus={autofocus}
  checked={checked}
  defaultChecked={defaultChecked}
  disabled={disabled}
  id={id}
  label={label}
  name={name}
  required={required}
  value={value}

  handleChange={handleChange}
/>
```