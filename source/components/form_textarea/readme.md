This component can be used like so.

```js
function handleChange (e, value) {
  /*
    `e` is the event.

    `value` is the *.value of the textarea.
  */
}

const autofocus = true // Default: false.
const disabled = true // Default: false.
const id = '...' // Ensured unique, if blank.
const name = '...' // Uses id, if blank.
const placeholder = '...' // Default: null.
const required = true // Default: false.

// Determine pre-filled text.
const defaultValue = '...' // Default: null.
const value = '...' // Default: null.
```

**Note:** There is a difference between `value` and `defaultValue`. For more info, see the React documentation for…

* [Controlled Components](https://facebook.github.io/react/docs/forms.html#controlled-components)
* [Uncontrolled Components](https://facebook.github.io/react/docs/forms.html#uncontrolled-components)

To use the component, pass these props.

```xml
<Textarea
  autofocus={autofocus}
  disabled={disabled}
  id={id}
  name={name}
  placeholder={placeholder}
  required={required}

  defaultValue={defaultValue}
  value={value}

  handleChange={handleChange}
/>
```