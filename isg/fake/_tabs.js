// Dependencies.
import React from 'react'
import TabPanel from '../components/tabs/template_panel'

// Generate dummy tab content.
export default function (count) {
  count = count || 3

  var tabs = []

  for (let i = 0; i < count; i++) {
    let label = 'Tab ' + (i + 1)

    tabs.push(
      <TabPanel label={label}>
        <p>
          Content for "{label}"
        </p>
      </TabPanel>
    )
  }

  return tabs
}
