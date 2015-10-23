// Dependencies.
import React from 'react'

// Filler text for `<div class="box">`.
export default function (count) {
  count = count || 1

  const children = []

  for (let i = 0; i < count; i++) {
    children.push(
      <p key={i}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    )
  }

  return children
}
