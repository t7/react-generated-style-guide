// ================================
// Flag for `localStorage` support.
// ================================

const flag = (function () {
  // Assume no support.
  var bool = false

  // Used in the `try`.
  var key = 'TEST_KEY'
  var val = 'TEST_VAL'

  // Rigorously test for support.
  try {
    // Set the key/value.
    window.localStorage.setItem(key, val)

    // Are we able to read it?
    bool = window.localStorage.getItem(key) === val

    // Delete the key/value.
    window.localStorage.removeItem(key)
  } catch (e) {}

  // Return the boolean.
  return bool
})()

// =======================
// Cache: Alias to object.
// =======================

const cache = flag ? window.localStorage : {clear: function () {}}

// =======================
// Cache: Clear key/value.
// =======================

function clear (key) {
  cache.clear()
}

// ==============
// Cache: Getter.
// ==============

function get (key) {
  var data = cache[key]

  // Exit, if no data.
  if (!data) {
    return
  }

  try {
    // Attempt to parse.
    data = JSON.parse(data)
  } catch (e) {
    // Use untouched.
    data = parseFloat(cache[key])
  }

  return data || cache[key]
}

// ==============
// Cache: Setter.
// ==============

function set (key, data) {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }

  cache[key] = data
}

// ==========================
// Cache: Remove single item.
// ==========================

function remove (key) {
  delete cache[key]
}

// ==============
// Export object.
// ==============

export default {
  clear: clear,
  get: get,
  remove: remove,
  set: set
}
