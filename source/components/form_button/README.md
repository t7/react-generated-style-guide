The `<Button/>` component can be used as a form input (the typical use case) or as a link.

Below is an example of all the props that it can use, though some are mutually exclusive. For instance, you could specify the `type` of button as `submit`, but wouldn't set the `type` of a link.

By passing `href`, the component will be used as an `<a>` link, otherwise a `<button>` tag will be generated.

```js
// Event callback.
function handleClick (e, buttonData) {
  /*
    `e` is the event.

    `buttonData` is whatever you have defined.

    If nothing is set, then it will just be
    the string of "Button Data" passed back.
  */
}

const ariaControls = '...' // Default: null.
const disabled = true // Default: false.
const href = 'http://example.com/' Default: null.
const mode = 'info | negative | positive | warn' // Default: 'default'.
const size = 'small | big' // Default: null.
const text = 'Button Text'
const target = '_blank | ...' // Default: null.
const title = '...' // Default: null.
const type = 'submit | reset' // Default: 'button'.

/*
  Data you might want to associate
  to the button, to be reported via
  callback when/if it is clicked.
*/
const buttonData = {
  foo: 'bar'
}
```

To use the component, pass these props.

```jsx
// Link.
<Button
  href={href}
  mode={mode}
  size={size}
  text={text}
  target={target}
  title={title}
/>

// Button.
<Button
  ariaControls={ariaControls}
  buttonData={buttonData}
  disabled={disabled}
  mode={mode}
  size={size}
  text={text}
  title={title}

  handleClick={handleClick}
/>
```