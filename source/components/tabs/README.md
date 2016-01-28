This component can be used like so.

```js
function handleClick (e, label) {
  /*
    `e` is the event.

    `label` is the text itself.
  */
}
```

```xml
<Tabs selected={0} handleClick={handleClick}>
  <TabPanel label='Tab 1'>
    <p>
      Tab content for "Tab 1"
    </p>
  </TabPanel>
  <TabPanel label='Tab 2'>
    <p>
      Tab content for "Tab 2"
    </p>
  </TabPanel>
  <TabPanel label='Tab 3'>
    <p>
      Tab content for "Tab 3"
    </p>
  </TabPanel>
</Tabs>
```