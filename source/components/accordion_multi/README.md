This component can be used like so.

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