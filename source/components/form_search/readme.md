This component can be used like so.

```js
function handleSubmit (e, value) {
  /*
    `e` is the event.

    `value` is the *.value of the input.
  */
}

const buttonText = 'GO'
const placeholder = 'Search...'
```

To use the component, pass these props.

```xml
<Search
  buttonText={buttonText}
  placeholder={placeholder}

  handleSubmit={handleSubmit}
/>
```