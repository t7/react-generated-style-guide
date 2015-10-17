;(function () {
  var document = window.document
  var location = window.location
  var arr = location.pathname.split('/')
  var len = arr.length
  var path = arr[len - 1] || arr[len - 2]
  var el = document.getElementById('isg_header_select')
  var list = el.getElementsByTagName('option')

  Array.prototype.forEach.call(list, function (item, i) {
    if (path === item.value) {
      el.selectedIndex = i
    }
  })

  el.onchange = function () {
    var value = el.value

    if (!value) {
      return
    }

    var url = '/style_guide/' + value
    location.href = url
  }
})()
