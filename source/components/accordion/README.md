This component functions similarly to `<AccordionMulti/>` except that it only allows for one area to be expanded at a time.

By default, accordion areas are collapsed. To render an area open, pass an object with the corresponding index set to `true`.

```js
const selected = {
  0: true
}

function handleClick (e, index, label, isActive) {
  /*
    `e` is the event.

    `index` is the numeric position.

    `label` is the text itself.

    `isActive` denotes selected state.
  */
}
```

```xml
<Accordion selected={selected} handleClick={handleClick}>
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
</Accordion>
```