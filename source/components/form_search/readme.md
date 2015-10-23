This component can be used like so.

<pre class="language-javascript"><code>
function handleSubmit (e, value) {
  /*
    `e` is the event.

    `value` is the *.value of the input.
  */
}

const buttonText = 'GO'
const placeholder = 'Search...'
</code></pre>

To use the component, pass these props.

```
<Search
  buttonText={buttonText}
  placeholder={placeholder}

  handleSubmit={handleSubmit}
/>
```