// Dependencies.
import _ from 'lodash'
import accounting from 'accounting'
import d3 from 'd3'
import moment from 'moment'
import utils from '../../utils'

export default class Chart {
  constructor (el, props) {
    this.el = el
    this.props = props
    this.setConfig()
    this.bindEvents()
  }

  bindEvents () {
    var handleClickCollapseAll = this.props.handleClickCollapseAll
    var handleClickExpandAll = this.props.handleClickExpandAll
    var handleClickNode = this.props.handleClickNode
    var handleClickMenu = this.props.handleClickMenu
    var handleClickToggle = this.props.handleClickToggle

    if (typeof handleClickCollapseAll !== 'function') {
      handleClickCollapseAll = function () {}
    }

    if (typeof handleClickExpandAll !== 'function') {
      handleClickExpandAll = function () {}
    }

    if (typeof handleClickNode !== 'function') {
      handleClickNode = function () {}
    }

    if (typeof handleClickMenu !== 'function') {
      handleClickMenu = function () {}
    }

    if (typeof handleClickToggle !== 'function') {
      handleClickToggle = function () {}
    }

    // Callback for collapsing all items.
    this.handleClickCollapseAll = handleClickCollapseAll

    // Callback for expanding all items.
    this.handleClickExpandAll = handleClickExpandAll

    // Callback for clicking a "leaf".
    this.handleClickNode = handleClickNode

    // Callback for clicking menu item.
    this.handleClickMenu = handleClickMenu

    // Callback for expand/collapse.
    this.handleClickToggle = handleClickToggle
  }

  setConfig () {
    const duration = this.props.duration
    const itemH = this.props.itemH
    const menu = this.props.menu
    const rectH = this.props.rectH
    const rectW = this.props.rectW

    this.config = {
      duration: duration,
      itemH: itemH,
      menu: menu,
      rectH: rectH,
      rectW: rectW
    }
  }

  /*
    This is called when the React
    component itself is unmounted.
  */
  destroy () {
    const svg = this.el.querySelector('svg')

    if (!svg) {
      return
    }

    svg.remove()
  }

  elbowLink (d) {
    const config = this.config

    const rectW = config.rectW
    const rectH = config.rectH

    const sourceType = d.source.type
    const targetType = d.target.type

    const isAccountLink =
      sourceType === 'taxEntity' &&
      targetType === 'account'

    // Set in conditional.
    var value

    // Not account?
    if (!isAccountLink) {
      let startX = d.source.x + (rectW / 2)
      let startY = d.source.y + (rectH / 2)

      let midY =
      (d.source.y + ((d.target.y - d.source.y) * 0.5)) + (rectH / 2)

      let endX = (d.target.x + (rectW / 2))
      let endY = (d.target.y + (rectH / 2))

      value =
        // Move to: X, Y.
        'M' + startX + ',' + startY +

        // Vertical line.
        'V' + midY +

        // Horizontal line.
        'H' + endX +

        // Vertical line.
        'V' + endY
    }

    // Is account?
    if (isAccountLink) {
      let startX = d.source.x + 20
      let startY = d.source.y

      let midY = d.target.y + 32
      let endX = d.target.x + 20

      value =
        // Move to: X, Y.
        'M' + startX + ',' + startY +

        // Vertical line.
        'V' + midY +

        // Horizontal line.
        'H' + endX
    }

    // Expose value.
    return value
  }

  setPan () {
    this.svg.attr(
      'transform',
      'translate(' + d3.event.translate + ')' +
      ' ' +
      'scale(' + d3.event.scale + ')'
    )
  }

  menuToggle (d, el) {
    // Callback.
    const handleClickMenu = this.handleClickMenu.bind(handleClickMenu)

    const svg = this.svg

    const config = this.config
    const rectW = config.rectW

    const type = d.type
    const menuData = config.menu[type]
    const itemH = config.itemH
    const menuH = menuData ? menuData.length * itemH : 0

    const x = d.x + rectW + 6
    const y = d.y + 18 - (menuH / 2)
    const transform = 'translate(' + x + ',' + y + ')'

    var group = svg.select('.t7-d3-tree-diagram__menu__group')

    const groupDom = group[0][0]
    const groupExists = groupDom !== null

    // Set in conditional.
    var isActive

    // Does menu exist?
    if (groupExists) {
      let currentTransform = group.attr('transform')

      isActive = currentTransform === transform

      group.remove()
    }

    /*
      If active menu is being toggled closed:

      Exit, don't create a new DOM element.
    */
    if (isActive || !menuData) {
      return
    }

    // Add group to DOM.
    group = svg.append('g')
    group.attr('transform', transform)
    group.attr('class', 't7-d3-tree-diagram__menu__group')

    // Add menu to DOM.
    const menu = group.append('rect')

    // Defined in loop.
    var characterCount = 0

    // Get longest text string.
    menuData.forEach(function (item, i) {
      if (item.text.length > characterCount) {
        characterCount = item.text.length
      }
    })

    // Determine menu width.
    const menuW = characterCount * 7

    // Add menu properties.
    menu.attr('class', 't7-d3-tree-diagram__menu')
    menu.attr('width', menuW)
    menu.attr('height', menuH)

    // Add menu arrow.
    const menuArrow = group.append('rect')

    menuArrow.attr('width', 16)
    menuArrow.attr('height', 16)
    menuArrow.attr('fill', 'url(#t7-d3-tree-diagram__icon-menu-arrow)')
    menuArrow.attr('x', -14)
    menuArrow.attr('y', (menuH / 2) - 8)

    // Loop through data, create rows.
    menuData.forEach(function (item, i) {
      const y = i * itemH

      // Add row group.
      const g = group.append('g')
      g.attr('transform', 'translate(0,' + y + ')')
      g.attr('class', 't7-d3-tree-diagram__menu__row__group')

      g.on('click', function (x) {
        handleClickMenu(d, i, item.text)
      })

      // Add row.
      const rect = g.append('rect')
      rect.attr('class', 't7-d3-tree-diagram__menu__row')
      rect.attr('width', menuW)
      rect.attr('height', itemH)

      // Add text.
      const text = g.append('text')
      text.text(item.text)
      text.attr('class', 't7-d3-tree-diagram__menu__text')
      text.attr('x', 10)
      text.attr('y', itemH / 2)
      text.attr('dy', '0.35em')
    })
  }

  itemToggle (d) {
    if (d.children) {
      d._children = d.children
      d.children = null
    } else if (d._children) {
      d.children = d._children
      d._children = null
    }

    // Update the UI.
    this.update(d, !!this.config.duration)

    // Fire callback.
    this.handleClickToggle(d, !!d.children)
  }

  itemToggleFill (d, el) {
    var fill = 'none'

    if (d.children) {
      fill = 'url(#t7-d3-tree-diagram__icon-minus)'
    } else if (d._children) {
      fill = 'url(#t7-d3-tree-diagram__icon-plus)'
    }

    return fill
  }

  createIcon (o) {
    o = o || {}

    const id = o.id
    const path = o.path
    const width = o.width
    const height = o.height
    const x = o.x || 0
    const y = o.y || 0

    this.defs
      .append('pattern')
      .attr('id', id)
      .attr('width', width)
      .attr('height', height)
      .append('image')
      .attr('xlink:href', path)
      .attr('width', width)
      .attr('height', height)
      .attr('x', x)
      .attr('y', y)
  }

  calcRectHeight (d) {
    var height = 45

    if (d.name) {
      height += 25
    }

    if (d.number) {
      height += 15
    }

    if (d.mv) {
      height += 15
    }

    if (d.status) {
      height += 25
    }

    if (d.alertText) {
      height += 25
    }

    return height
  }

  buildIcons () {
    this.defs = this.root.append('defs')

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-plus',
      path: require('./images/t7-d3-tree-diagram__icon-plus.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-minus',
      path: require('./images/t7-d3-tree-diagram__icon-minus.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-superhouse',
      path: require('./images/t7-d3-tree-diagram__icon-superhouse.svg'),
      width: 24,
      height: 24
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-household',
      path: require('./images/t7-d3-tree-diagram__icon-household.svg'),
      width: 24,
      height: 24
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-tax-entity',
      path: require('./images/t7-d3-tree-diagram__icon-tax-entity.svg'),
      width: 24,
      height: 24
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-pcr',
      path: require('./images/t7-d3-tree-diagram__icon-pcr.svg'),
      width: 24,
      height: 24
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-pcr--inactive',
      path: require('./images/t7-d3-tree-diagram__icon-pcr--inactive.svg'),
      width: 24,
      height: 24
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-firm',
      path: require('./images/t7-d3-tree-diagram__icon-firm.svg'),
      width: 24,
      height: 24
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-firm--inactive',
      path: require('./images/t7-d3-tree-diagram__icon-firm--inactive.svg'),
      width: 24,
      height: 24
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-check',
      path: require('./images/t7-d3-tree-diagram__icon-check.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-problem',
      path: require('./images/t7-d3-tree-diagram__icon-problem.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-time',
      path: require('./images/t7-d3-tree-diagram__icon-time.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-electronic',
      path: require('./images/t7-d3-tree-diagram__icon-electronic.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-manual',
      path: require('./images/t7-d3-tree-diagram__icon-manual.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-partner',
      path: require('./images/t7-d3-tree-diagram__icon-partner.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-menu',
      path: require('./images/t7-d3-tree-diagram__icon-menu.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-menu-arrow',
      path: require('./images/t7-d3-tree-diagram__icon-menu-arrow.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-alert--negative',
      path: require('./images/t7-d3-tree-diagram__icon-alert--negative.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-alert--positive',
      path: require('./images/t7-d3-tree-diagram__icon-alert--positive.svg'),
      width: 16,
      height: 16
    })
  }

  setup () {
    // Destroy, if it exists.
    this.destroy()

    // Get data set in `render`.
    const data = this.data

    // Exit, if no data.
    if (!data || !Object.keys(data).length) {
      return
    }

    const setPan = this.setPan.bind(this)

    const width = this.el.offsetWidth
    const config = this.config

    const rectW = config.rectW
    const rectH = config.rectH

    const offset = (width / 2) - (rectW / 2)

    this.tree = d3.layout.tree()

    this.tree.separation(function (d) {
      var n = 1

      if (d.type === 'account') {
        n = 0
      }

      if (d.type === 'taxEntity') {
        n = 1.15
      }

      return n
    })

    // Set default node size.
    this.tree.nodeSize([
      rectW + 20,
      rectH + 20
    ])

    this.root = d3
      .select(this.el)
      .append('svg')
      .call(
        d3
          .behavior
          .zoom()
          .translate([offset, 20])
          .scaleExtent([0.25, 2])
          .on('zoom', setPan)
      )

    // Add images to the `<defs>`.
    this.buildIcons()

    // Add the parent group.
    this.svg = this.root
      .append('g')
      .attr('transform', 'translate(' + offset + ',' + 20 + ')')

    // Update UI.
    this.update(data)
  }

  // Called via `this.render`.
  update (source, showAnimation) {
    // Get data set in `render`.
    const data = this.data

    // Callbacks with `this` bound to scope.
    const menuToggle = this.menuToggle.bind(this)
    const calcRectHeight = this.calcRectHeight.bind(this)
    const elbowLink = this.elbowLink.bind(this)
    const itemToggle = this.itemToggle.bind(this)
    const itemToggleFill = this.itemToggleFill.bind(this)

    // Defined in the React `props`.
    const handleClickNode = this.handleClickNode.bind(this)

    // Options from `this.setConfig`.
    const config = this.config
    const duration = config.duration
    const rectW = config.rectW
    const rectH = config.rectH

    // Compute tree layout.
    const nodes = this.tree.nodes(data)
    const links = this.tree.links(nodes)

    // Remove menu, if it exists.
    this.svg.select('.t7-d3-tree-diagram__menu__group').remove()

    // Normalize positions for accounts.
    nodes.forEach(function (d) {
      const offset = rectH + 50
      const isAccount = d.type === 'account'

      const hasAccountChildren =
        !isAccount &&
        d.children &&
        d.children[0].type === 'account'

      // If not account, apply normal depth.
      if (!isAccount) {
        d.y = d.depth * offset
      }

      // Loop through account children.
      if (hasAccountChildren) {
        d.children.forEach(function (child, i) {
          child.x = d.x + 40
          child.y = d.y + offset + (i * offset)
        })
      }
    })

    // =================
    // Update the nodes.
    // =================

    const allNodes = this
      .svg
      .selectAll('.t7-d3-tree-diagram__group')
      .data(nodes, function (d) {
        // Fallback.
        d.number = d.number || 'account: N/A'

        // Generate ID per node.
        d.id = d.id || utils.unique()
        return d.id
      })

    // ======================
    // Create group per node.
    // ======================

    const nodeGroup = allNodes.enter().append('g')

    // Add title tooltip.
    nodeGroup.append('svg:title').text(function (d) {
      return d.name
    })

    nodeGroup.style('opacity', 0)

    nodeGroup.attr('transform', function (d) {
      const x = source.x0 || source.x
      const y = source.y0 || source.y

      return 'translate(' + x + ',' + y + ')'
    })

    nodeGroup.attr('class', function (d) {
      var c = ['t7-d3-tree-diagram__group']

      if (d.inactive) {
        c.push('t7-d3-tree-diagram__group--inactive')
      }

      return c.join(' ')
    })

    // ====================
    // Add node rectangles.
    // ====================

    const itemRect = nodeGroup.append('rect')

    itemRect.attr('rx', 4)
    itemRect.attr('ry', 4)
    itemRect.attr('width', rectW)
    itemRect.attr('class', 't7-d3-tree-diagram__rect')

    itemRect.attr('height', function (d) {
      return calcRectHeight(d)
    })

    // ====================
    // Add the "type" icon.
    // ====================

    const typeIcon = nodeGroup.append('rect')

    typeIcon.attr('width', 24)
    typeIcon.attr('height', 24)
    typeIcon.attr('x', 15)
    typeIcon.attr('y', 20)

    typeIcon.attr('fill', function (d) {
      const t = d.type
      const m = d.managedBy

      var fill = 'none'

      // Super House?
      if (t === 'superHouse') {
        fill = 'url(#t7-d3-tree-diagram__icon-superhouse)'
      }

      // Household?
      if (t === 'household') {
        fill = 'url(#t7-d3-tree-diagram__icon-household)'
      }

      // Household?
      if (t === 'taxEntity') {
        fill = 'url(#t7-d3-tree-diagram__icon-tax-entity)'
      }

      // Household?
      if (t === 'account') {
        // Managed by PCR?
        if (m === 'self') {
          // Inactive?
          if (d.inactive) {
            fill = 'url(#t7-d3-tree-diagram__icon-pcr--inactive)'
          } else {
            fill = 'url(#t7-d3-tree-diagram__icon-pcr)'
          }
        }

        // Managed by outside firm?
        if (m === 'firm') {
          // Inactive?
          if (d.inactive) {
            fill = 'url(#t7-d3-tree-diagram__icon-firm--inactive)'
          } else {
            fill = 'url(#t7-d3-tree-diagram__icon-firm)'
          }
        }
      }

      return fill
    })

    // ================
    // Add alert icons.
    // ================

    const alertIcon = nodeGroup.append('rect')

    alertIcon.attr('width', 16)
    alertIcon.attr('height', 16)
    alertIcon.attr('x', 32)
    alertIcon.attr('y', 32)

    alertIcon.attr('fill', function (d) {
      var fill = 'none'

      if (d.alertType === 'positive') {
        fill = 'url(#t7-d3-tree-diagram__icon-alert--positive)'
      }

      if (d.alertType === 'negative') {
        fill = 'url(#t7-d3-tree-diagram__icon-alert--negative)'
      }

      return fill
    })

    alertIcon.style('display', function (d) {
      if (!d.alertType) {
        return 'none'
      }
    })

    // ========================
    // Add a group for content.
    // ========================

    const contentGroup = nodeGroup.append('g')

    contentGroup.attr('transform', function (d) {
      var x = 55
      var y = 0

      if (d.alertText) {
        y = 20
      }

      return 'translate(' + x + ',' + y + ')'
    })

    // ===============
    // Add alert text.
    // ===============

    /*
      Add directly to `nodeGroup` because `contentGroup`
      will be used for everything *except* `alertText`.
    */
    const alertText = nodeGroup.append('text')

    alertText.attr('x', 55)
    alertText.attr('y', 30)
    alertText.attr('dy', '0.35em')
    alertText.attr('text-anchor', 'start')

    alertText.text(function (d) {
      return d.alertText
    })

    alertText.attr('class', function (d) {
      const isNegative = d.alertType === 'negative'

      var c = 't7-d3-tree-diagram__alert--positive'

      if (isNegative) {
        c = 't7-d3-tree-diagram__alert--negative'
      }

      return c
    })

    // Hide, if no data.
    alertText.style('display', function (d) {
      if (!d.alertText) {
        return 'none'
      }
    })

    // ==============
    // Add node name.
    // ==============

    const itemName = contentGroup.append('text')

    itemName.attr('y', 30)
    itemName.attr('dy', '0.35em')
    itemName.attr('text-anchor', 'start')
    itemName.attr('class', 't7-d3-tree-diagram__name')

    itemName.text(function (d) {
      var name = d.name || ''

      if (name.length > 25) {
        name = name.slice(0, 25).trim() + '…'
      }

      return name
    })

    // Hide, if no data.
    itemName.style('display', function (d) {
      if (!d.name) {
        return 'none'
      }
    })

    // ==================================
    // Add item number (account, tax ID).
    // ==================================

    const itemNumber = contentGroup.append('text')

    itemNumber.attr('y', function (d) {
      var n = 30

      if (d.name) {
        n = 50
      }

      return n
    })

    itemNumber.attr('dy', '0.35em')
    itemNumber.attr('text-anchor', 'start')
    itemNumber.attr('class', 't7-d3-tree-diagram__mute')

    itemNumber.text(function (d) {
      return d.number
    })

    // =====================
    // Add node description.
    // =====================

    const itemDesc = contentGroup.append('text')

    itemDesc.attr('y', function (d) {
      var n = 50

      if (d.name) {
        n = 70
      }

      return n
    })

    itemDesc.attr('dy', '0.35em')
    itemDesc.attr('text-anchor', 'start')
    itemDesc.attr('class', 't7-d3-tree-diagram__mute')

    itemDesc.text(function (d) {
      if (d.description) {
        return d.description
      }

      var date = d.date || new Date().getTime()
      var mv = parseFloat(d.mv)

      if (mv) {
        mv = 'MV ' + accounting.formatMoney(mv)
      } else {
        mv = '$0.00'
      }

      if (date) {
        date = 'as of ' + moment(date).format('MM/DD/YYYY')
      }

      d.description = [
        mv,
        date
      ].join(' ')

      return d.description
    })

    // ======================
    // Add the "status" icon.
    // ======================

    const statusIcon = contentGroup.append('rect')

    statusIcon.attr('width', 16)
    statusIcon.attr('height', 16)
    statusIcon.attr('y', 90)
    statusIcon.attr('class', 't7-d3-tree-diagram__icon-status')

    statusIcon.attr('fill', function (d) {
      const s = d.status

      var fill = 'none'

      // Staus: okay?
      if (s === 'okay') {
        fill = 'url(#t7-d3-tree-diagram__icon-check)'
      }

      // Status: problem?
      if (s === 'problem') {
        fill = 'url(#t7-d3-tree-diagram__icon-problem)'
      }

      // Status: pending?
      if (s === 'pending') {
        fill = 'url(#t7-d3-tree-diagram__icon-time)'
      }

      return fill
    })

    // Hide, if no data.
    statusIcon.style('display', function (d) {
      if (!d.status) {
        return 'none'
      }
    })

    // ==========================
    // Add the "updated by" icon.
    // ==========================

    const updatedIcon = contentGroup.append('rect')

    updatedIcon.attr('width', 16)
    updatedIcon.attr('height', 16)
    updatedIcon.attr('x', 25)
    updatedIcon.attr('y', 90)
    updatedIcon.attr('class', 't7-d3-tree-diagram__icon-updated-by')

    updatedIcon.attr('fill', function (d) {
      const u = d.updatedBy

      var fill = 'none'

      // Updated by: electronic?
      if (u === 'electronic') {
        fill = 'url(#t7-d3-tree-diagram__icon-electronic)'
      }

      // Updated by: manually?
      if (u === 'manual') {
        fill = 'url(#t7-d3-tree-diagram__icon-manual)'
      }

      return fill
    })

    // Hide, if no data.
    updatedIcon.style('display', function (d) {
      if (!d.updatedBy) {
        return 'none'
      }
    })

    // =======================
    // Add the "percent" icon.
    // =======================

    const percentIcon = contentGroup.append('rect')

    percentIcon.attr('width', 16)
    percentIcon.attr('height', 16)
    percentIcon.attr('x', 50)
    percentIcon.attr('y', 90)
    percentIcon.attr('class', 't7-d3-tree-diagram__icon-partner')

    percentIcon.attr('fill', function (d) {
      const p = d.percent

      var fill = 'none'

      // Percent exists?
      if (p) {
        fill = 'url(#t7-d3-tree-diagram__icon-partner)'
      }

      return fill
    })

    // Hide, if no data.
    percentIcon.style('display', function (d) {
      if (!d.percent) {
        return 'none'
      }
    })

    // =================
    // Add percent text.
    // =================

    const percentText = contentGroup.append('text')

    percentText.attr('x', 69)
    percentText.attr('y', 98)
    percentText.attr('dy', '0.35em')
    percentText.attr('text-anchor', 'start')
    percentText.attr('class', 't7-d3-tree-diagram__mute')

    percentText.text(function (d) {
      return d.percent
    })

    // Hide, if no data.
    percentText.style('display', function (d) {
      if (!d.percent) {
        return 'none'
      }
    })

    // ===================================
    // Add invisible rectangle, for click.
    // ===================================

    const leafRect = nodeGroup.append('rect')

    leafRect.attr('width', rectW)
    leafRect.attr('opacity', 0)

    leafRect.attr('height', function (d) {
      return calcRectHeight(d)
    })

    // Defined in React `props`.
    leafRect.on('click', handleClickNode)

    // =====================
    // Add the "+/-" toggle.
    // =====================

    const toggleIcon = nodeGroup.append('rect')

    // Add title tooltip.
    toggleIcon.append('svg:title').text('Expand/Collapse')

    toggleIcon.attr('width', 16)
    toggleIcon.attr('height', 16)
    toggleIcon.attr('rx', 4)
    toggleIcon.attr('ry', 4)
    toggleIcon.attr('class', 't7-d3-tree-diagram__toggle')

    toggleIcon.attr('x', function (d) {
      var n = (rectW / 2) - 8

      if (d.type === 'taxEntity') {
        n = 12
      }

      return n
    })

    toggleIcon.attr('y', function (d) {
      return calcRectHeight(d) - 8
    })

    toggleIcon.attr('fill', function (d) {
      return itemToggleFill(d, this)
    })

    toggleIcon.on('click', function (d) {
      itemToggle(d)

      // `this` means the element itself.
      const fill = itemToggleFill(d, this)

      d3.select(this).attr('fill', fill)
    })

    // Hide, if no data.
    toggleIcon.style('display', function (d) {
      if (!d.children && !d._children) {
        return 'none'
      }
    })

    // ====================
    // Add the "menu" icon.
    // ====================

    const menuIcon = nodeGroup.append('rect')

    // Add title tooltip.
    menuIcon.append('svg:title').text('Options Menu')

    menuIcon.append('rect')
    menuIcon.attr('width', 16)
    menuIcon.attr('height', 16)
    menuIcon.attr('x', rectW - 25)
    menuIcon.attr('y', 10)
    menuIcon.attr('rx', 4)
    menuIcon.attr('ry', 4)
    menuIcon.attr('class', 't7-d3-tree-diagram__icon-menu')
    menuIcon.attr('fill', 'url(#t7-d3-tree-diagram__icon-menu)')

    // Show/Hide menu.
    menuIcon.on('click', function (d) {
      menuToggle(d, this)
    })

    // Flag to hide menus.
    const hideMenuIcons = this.props.hideMenuIcons

    // Hide, if no data.
    menuIcon.style('display', function (d) {
      if (!config.menu[d.type] || hideMenuIcons) {
        return 'none'
      }
    })

    // =============================
    // Associate links with targets.
    // =============================

    const allLinks = this
      .svg
      .selectAll('.t7-d3-tree-diagram__link')
      .data(links, function (d) {
        return d.target.id
      })

    // =============================
    // Apply "elbow" style to links.
    // =============================

    allLinks
      .enter()
      .insert('path', 'g')
      .attr('class', 't7-d3-tree-diagram__link')
      .attr('x', rectW / 2)
      .attr('y', rectH / 2)
      .style('opacity', 1)
      .attr('d', function (d) {
        return elbowLink({
          source: {
            x: source.x0 || source.x,
            y: source.y0 || source.y,
            type: d.source.type
          },
          target: {
            x: source.x0 || source.x,
            y: source.y0 || source.y,
            type: d.target.type
          }
        })
      })

    // ===============
    // Show animation?
    // ===============

    if (showAnimation) {
      // Nodes: opening transition.
      allNodes
        .transition()
        .duration(duration)
        .style('opacity', 1)
        .attr('transform', function (d) {
          return 'translate(' + d.x + ',' + d.y + ')'
        })

      // Nodes: closing transition.
      allNodes
        .exit()
        .transition()
        .style('opacity', 0)
        .duration(duration)
        .attr('transform', function (d) {
          return 'translate(' + source.x + ',' + source.y + ')'
        })
        .remove()

      // Links: opening transition.
      allLinks
        .transition()
        .duration(duration)
        .style('opacity', 1)
        .attr('d', elbowLink)

      // Links: closing transition.
      allLinks
        .exit()
        .transition()
        .duration(duration)
        .style('opacity', 0)
        .attr('d', function (d) {
          return elbowLink({
            source: {
              x: source.x,
              y: source.y,
              type: d.source.type
            },
            target: {
              x: source.x,
              y: source.y,
              type: d.target.type
            }
          })
        })
        .remove()
    }

    // =============
    // No animation?
    // =============

    if (!showAnimation) {
      // Nodes: open.
      allNodes
        .style('opacity', 1)
        .attr('transform', function (d) {
          return 'translate(' + d.x + ',' + d.y + ')'
        })

      // Nodes: closed.
      allNodes
        .exit()
        .remove()

      // Links: open.
      allLinks
        .style('opacity', 1)
        .attr('d', elbowLink)

      // Links: closed.
      allLinks
        .exit()
        .remove()
    }

    // ================
    // Stash positions.
    // ================

    nodes.forEach(function (d) {
      d.x0 = d.x
      d.y0 = d.y
    })
  }

  // Expand all items.
  expandAll (d) {
    d = d || this.data.children

    this.expand(this.data)
    this.update(this.data)

    this.handleClickExpandAll(d)
  }

  // Collapse all items.
  collapseAll (d) {
    d = d || this.data.children

    this.collapse(this.data)
    this.update(this.data)

    this.handleClickCollapseAll(d)
  }

  // Recursively expand children.
  expand (d, type) {
    const expand = this.expand.bind(this)
    const children = d._children || d.children

    if (children) {
      children.forEach(function (d) {
        expand(d, type)
      })
    }

    if (d._children) {
      d.children = d._children
      d._children = null
    }

    if (d._children && type && d.type === type) {
      d.children = d._children
      d._children = null
    }
  }

  // Recursively collapse children.
  collapse (d, type) {
    const collapse = this.collapse.bind(this)
    const children = d.children || d._children

    if (children) {
      children.forEach(function (d) {
        collapse(d)
      })
    }

    if (d.children && !type) {
      d._children = d.children
      d.children = null
    }

    if (d.children && type && d.type === type) {
      d._children = d.children
      d.children = null
    }
  }

  /*
    Called when the React component
    is mounted, or has updated data.
  */
  render (data) {
    data = _.cloneDeep(data)

    const collapse = this.collapse.bind(this)
    const children = data.children || data._children

    if (children) {
      children.forEach(function (d) {
        collapse(d, 'taxEntity')
      })
    }

    this.data = data
    this.setup()
  }
}
