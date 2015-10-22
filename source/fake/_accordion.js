// Dependencies.
import React from 'react'
import AccordionPanel from '../components/accordion/template_panel'

// Generate dummy tab content.
export default function (count) {
  count = count || 3

  var panels = []

  for (let i = 0; i < count; i++) {
    let label = 'Item ' + (i + 1)

    panels.push(
      <AccordionPanel label={label}>
        <p>
          Content for "{label}"
        </p>
      </AccordionPanel>
    )
  }

  return panels
}
