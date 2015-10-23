This component can be used like so.

<pre class="language-javascript"><code>
function handleChange (e, value, checked) {
  /*
    `e` is the event.

    `value` is the *.value of the checkbox.

    `checked` is a boolean.
  */
}

const options = [
  {
    autofocus: true, // Default: false.
    checked: true, // Default: false.
    defaultChecked: true, // Default: false.
    disabled: true, // Default: false.
    id: '...', // Ensured unique, if blank.
    name: '...', // Uses id, if blank.
    label: 'Checkbox list inline - label 01',
    required: true, // Default: false.
    value: '...', // Uses label, if blank.

    // Will be called when (un-)checked.
    handleChange: handleChange
  },
  {
    label: 'Checkbox list inline - label 02'
  }

  // Etc.
]
</code></pre>

To use the component, pass these props.

```
<CheckboxListInline
  options={options}

  handleChange={handleChange}
/>
```