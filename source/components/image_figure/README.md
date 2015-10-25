This component can be used like so.

```js
const alt = '...' // Default: "".
const border = '#999' // Default: null.
const caption = 'Image Caption Here'
const captionTop = true // Default: false.
const href = 'http://example.com/' // Default: null.
const src = 'photo.jpg' // Default: Placehold.it
const target = '_blank' // Default: null.
const width = '1000' // Default: null.
const height = '300' // Default: null.
```

This component works similarly to `<Image/>` in that it will pull from the [Placehold.it](http://placehold.it/) service if no `src` is passed. It differs in that the `<ImageFigure/>` always stretches to fill `100%` of its parent, using `width` and `height` to determine its proportions.

To use the component, pass these props.

```xml
<ImageFigure
  alt={alt}
  border={border}
  caption={caption}
  captionTop={captionTop}
  href={href}
  src={src}
  target={target}
  width={width}
  height={height}
/>
```