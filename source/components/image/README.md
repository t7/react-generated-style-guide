This component can be used like so.

```js
const alt = '...' // Default: "".
const border = '#999' // Default: null.
const href = 'http://example.com/' // Default: null.
const src = 'photo.jpg' // Default: Placehold.it
const target = '_blank' // Default: null.
const width = '200' // Default: null.
const height = '100' // Defualt: null.

// Event callback.
function handleClick (e) {
  /*
    `e` is the event.
  */
}
```

This component adds a bit of logic to figure out whether it should employ a placeholder from [Placehold.it](http://placehold.it/) or not. Namely, if a `src` is present, it will use that. If not, it will create a dummy image using the `width` and `height` that were passed in. If none are present, it will default to a `200` &times; `100` image.

Occasionally, one might use an image that has a light background, necessitating visual separation from the page. If so, you can pass a hex color as `border`, which will create a `1px` line on each side.

To use the component, pass these props.

```xml
<Image
  alt={alt}
  border={border}
  src={src}
  width={width}
  height={height}

  handleClick={handleClick}
/>
```