This component functions similarly to `<Accordion/>` except that it allows for multiple areas to be expanded at a time.

By default, accordion areas are collapsed. To render an area open, pass an object with the corresponding index set to `true`.

```js
const selected = {
  0: true,
  1: true,
  2: true
}
```

```xml
<AccordionMulti selected={selected}>
  <AccordionPanel label='Item 1'>
    <p>
      Content for "Item 1"
    </p>
  </AccordionPanel>
  <AccordionPanel label='Item 2'>
    <p>
      Content for "Item 2"
    </p>
  </AccordionPanel>
  <AccordionPanel label='Item 3'>
    <p>
      Content for "Item 3"
    </p>
  </AccordionPanel>
</AccordionMulti>
```