// Dependencies.
import React from 'react'

// Generates dummy list items.
export default function (count) {
  count = count || 3

  const children = []

  for (let i = 0; i < count; i++) {
    children.push(
      <li key={i}>
        List Item {i + 1}
      </li>
    )
  }

  return children
}
