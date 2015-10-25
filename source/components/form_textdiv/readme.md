**Note:** This uses the same props as `<Textarea />`, but has a different tag name.

While they are functionally similar, there is quite a bit going on "under the hood" of `<Textdiv />`.

Its output is a `<div>` with `contenteditable="true"`, that converts anything pasted or typed into it to plain text, much like a default HTML `<texarea>` would.

The benefit of using a `<Textdiv />` component is that it grows with its content, without necessitating a JS grow-by-pixel approach, which is how one might handle a `<textarea>`.

```
<Textdiv
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