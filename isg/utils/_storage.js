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

const cacheFallback = {
  clear: function () {
    for (let k in cache) {
      if (cache.hasOwnProperty(k) && k !== 'clear') {
        delete cache[k]
      }
    }
  }
}

const cache = flag ? window.localStorage : cacheFallback

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
    // Set to original.
    data = cache[key]
  }

  return data
}

// ==============
// Cache: Setter.
// ==============

function set (key, data) {
  if (
    key === 'clear' ||
    key === 'getItem' ||
    key === 'setItem'
  ) {
    throw new Error(
      'Cannot overwrite method: window.localStorage.' + key
    )
  }

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

const storage = {
  clear: clear,
  get: get,
  remove: remove,
  set: set
}

// Expose methods.
export default storage
