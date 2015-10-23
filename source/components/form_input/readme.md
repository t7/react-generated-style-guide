This component can be used like so.

<pre class="language-javascript"><code>
function handleChange (e, value) {
  /*
    `e` is the event.

    `value` is the *.value of the input.
  */
}

const autofocus = true // Default: false.
const disabled = // Default: false.
const id = '...' // Ensured unique, if blank.
const name = '...' // Uses id, if blank.
const placeholder = '...' // Default: null.
const required = true // Default: false.
const type = 'text' // Default: "text".

/*
  Note: If you want to set an input to
  a particular character width, you must
  pass `width = 'auto'` and the size.
*/
const size = '10' // Default: null.
const width = 'auto' // Default: 100%.
</code></pre>

To use the component, pass these props.

```
<Input
  autofocus={autofocus}
  disabled={disabled}
  id={id}
  name={name}
  placeholder={placeholder}
  required={required}
  type={type}

  size={size}
  width={width}

  handleChange={handleChange}
/>
```