import d3 from 'd3'

export default class Chart {
  constructor (el, props) {
    this.el = el
    this.setConfig()
    this.bindResize()

    // Callback for clicking a "leaf".
    this.handleClickLeaf =
      props.handleClickLeaf || function () {}

    // Callback for clicking menu item.
    this.handleClickMenu =
      props.handleClickMenu || function () {}
  }

  setConfig () {
    this.config = {
      duration: 500,
      rectW: 260,
      rectH: 120,
      itemH: 30,
      menu: {
        /*
          NOTE: These keys correspond
          to each object's `*.type`.
        */
        superHouse: [
          {
            text: 'Add: Household'
          },
          {
            text: 'View/Edit: Super House Details'
          }
        ],
        household: [
          {
            text: 'Add: Tax Entity'
          },
          {
            text: 'View/Edit: Household Details'
          }
        ],
        taxEntity: [
          {
            text: 'Add: Single Account'
          },
          {
            text: 'Add: PCR Data Services Accounts'
          },
          {
            text: 'Add: Firm/Office Managed Accounts'
          },
          {
            text: 'View/Edit: Tax Entity Details'
          }
        ]
      }
    }
  }

  bindResize () {
    const resize = this.resize.bind(this)
    window.addEventListener('resize', resize)
  }

  unbindResize () {
    const resize = this.resize.bind(this)
    window.removeEventListener('resize', resize)
  }

  resize () {
    const width = this.el.offsetWidth
    const height = this.el.offsetHeight

    d3
      .select('svg')
      .attr('width', width)
      .attr('height', height)
  }

  /*
    This is called when the React
    component itself is unmounted.
  */
  destroy () {
    this.unbindResize()

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

  arrowMenuToggle (d, el) {
    // Callback.
    const handleClickMenu = this.handleClickMenu.bind(handleClickMenu)

    const svg = this.svg

    const config = this.config
    const rectW = config.rectW

    const type = d.type
    const menuData = config.menu[type]
    const itemH = config.itemH
    const menuH = menuData ? menuData.length * itemH : 0

    const x = d.x + rectW - 7
    const y = d.y + 18
    const transform = 'translate(' + x + ',' + y + ')'

    var group = svg.select('.t7-d3-tree-diagram__menu__group')

    const groupDom = group[0][0]
    const groupExists = groupDom !== null

    // Set in conditional.
    var isActive

    // Does arrow menu exist?
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

    menuData.forEach(function (item, i) {
      const y = i * itemH

      // Add row group.
      const g = group.append('g')
      g.attr('transform', 'translate(1,' + y + ')')
      g.attr('class', 't7-d3-tree-diagram__menu__row__group')

      g.on('click', function (x) {
        handleClickMenu(item.text, d)
      })

      // Add row.
      const rect = g.append('rect')
      rect.attr('class', 't7-d3-tree-diagram__menu__row')
      rect.attr('width', menuW - 1)
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
    } else {
      d.children = d._children
      d._children = null
    }

    // Set `showAnimation` to `true`.
    this.update(d, true)
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
    var height = 50

    if (d.name) {
      height += 30
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

    return height
  }

  buildIcons () {
    this.defs = this.root.append('defs')

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-plus',
      path: require('./images/t7-d3-tree-diagram__icon-plus.svg'),
      width: 10,
      height: 10,
      x: 3,
      y: 3
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-minus',
      path: require('./images/t7-d3-tree-diagram__icon-minus.svg'),
      width: 10,
      height: 10,
      x: 3,
      y: 3
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
      id: 't7-d3-tree-diagram__icon-briefcase',
      path: require('./images/t7-d3-tree-diagram__icon-briefcase.svg'),
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
      id: 't7-d3-tree-diagram__icon-lightning',
      path: require('./images/t7-d3-tree-diagram__icon-lightning.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-keyboard',
      path: require('./images/t7-d3-tree-diagram__icon-keyboard.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-people',
      path: require('./images/t7-d3-tree-diagram__icon-people.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-people',
      path: require('./images/t7-d3-tree-diagram__icon-people.svg'),
      width: 16,
      height: 16
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__icon-arrow-right',
      path: require('./images/t7-d3-tree-diagram__icon-arrow-right.svg'),
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
    const height = this.el.offsetHeight

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
      .attr('width', width)
      .attr('height', height)
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

    this.update(data)
  }

  // Called via `this.render`.
  update (source, showAnimation) {
    // Get data set in `render`.
    const data = this.data

    // Callbacks with `this` bound to scope.
    const arrowMenuToggle = this.arrowMenuToggle.bind(this)
    const calcRectHeight = this.calcRectHeight.bind(this)
    const elbowLink = this.elbowLink.bind(this)
    const itemToggle = this.itemToggle.bind(this)
    const itemToggleFill = this.itemToggleFill.bind(this)

    // Defined in the React `props`.
    const handleClickLeaf = this.handleClickLeaf.bind(this)

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

    // Used in loop.
    var i = 0

    const allNodes = this
      .svg
      .selectAll('.t7-d3-tree-diagram__group')
      .data(nodes, function (d) {
        // Increment counter.
        i++

        // Assign ID.
        d.id = d.id || i

        return d.id
      })

    // ======================
    // Create group per node.
    // ======================

    const nodeGroup = allNodes.enter().append('g')

    nodeGroup.attr('class', 't7-d3-tree-diagram__group')
    nodeGroup.attr('transform', function (d) {
      const x = source.x0 || source.x
      const y = source.y0 || source.y

      return 'translate(' + x + ',' + y + ')'
    })

    // ====================
    // Add node rectangles.
    // ====================

    const itemRect = nodeGroup.append('rect')

    // Defined in React `props`.
    itemRect.on('click', handleClickLeaf)

    itemRect.attr('class', 't7-d3-tree-diagram__rect')
    itemRect.attr('rx', 4)
    itemRect.attr('ry', 4)
    itemRect.attr('width', rectW)

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
    typeIcon.attr('class', 't7-d3-tree-diagram__icon-type')

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
          fill = 'url(#t7-d3-tree-diagram__icon-pcr)'
        }

        // Managed by outside firm?
        if (m === 'other') {
          fill = 'url(#t7-d3-tree-diagram__icon-briefcase)'
        }
      }

      return fill
    })

    // ======================
    // Add the "status" icon.
    // ======================

    const statusIcon = nodeGroup.append('rect')

    statusIcon.attr('width', 16)
    statusIcon.attr('height', 16)
    statusIcon.attr('x', 50)
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
    statusIcon.attr('style', function (d) {
      if (!d.status) {
        return 'display:none'
      }
    })

    // ==========================
    // Add the "updated by" icon.
    // ==========================

    const updatedIcon = nodeGroup.append('rect')

    updatedIcon.attr('width', 16)
    updatedIcon.attr('height', 16)
    updatedIcon.attr('x', 75)
    updatedIcon.attr('y', 90)
    updatedIcon.attr('class', 't7-d3-tree-diagram__icon-updated-by')

    updatedIcon.attr('fill', function (d) {
      const u = d.updatedBy

      var fill = 'none'

      // Updated by: electronic?
      if (u === 'electronic') {
        fill = 'url(#t7-d3-tree-diagram__icon-lightning)'
      }

      // Updated by: manually?
      if (u === 'manual') {
        fill = 'url(#t7-d3-tree-diagram__icon-keyboard)'
      }

      return fill
    })

    // Hide, if no data.
    updatedIcon.attr('style', function (d) {
      if (!d.updatedBy) {
        return 'display:none'
      }
    })

    // =======================
    // Add the "percent" icon.
    // =======================

    const percentIcon = nodeGroup.append('rect')

    percentIcon.attr('width', 16)
    percentIcon.attr('height', 16)
    percentIcon.attr('x', 100)
    percentIcon.attr('y', 90)
    percentIcon.attr('class', 't7-d3-tree-diagram__icon-percent')

    percentIcon.attr('fill', function (d) {
      const p = d.percent

      var fill = 'none'

      // Percent exists?
      if (p) {
        fill = 'url(#t7-d3-tree-diagram__icon-people)'
      }

      return fill
    })

    // Hide, if no data.
    percentIcon.attr('style', function (d) {
      if (!d.percent) {
        return 'display:none'
      }
    })

    // =================
    // Add percent text.
    // =================

    const percentText = nodeGroup.append('text')

    percentText.attr('x', 119)
    percentText.attr('y', 98)
    percentText.attr('dy', '0.35em')
    percentText.attr('text-anchor', 'start')
    percentText.attr('class', 't7-d3-tree-diagram__mute')

    percentText.text(function (d) {
      return d.percent
    })

    // Hide, if no data.
    percentText.attr('style', function (d) {
      if (!d.percent) {
        return 'display:none'
      }
    })

    // =====================
    // Add the "+/-" toggle.
    // =====================

    const toggleIcon = nodeGroup.append('rect')

    toggleIcon.attr('width', 16)
    toggleIcon.attr('height', 16)
    toggleIcon.attr('x', 18)
    toggleIcon.attr('y', 55)
    toggleIcon.attr('rx', 4)
    toggleIcon.attr('ry', 4)
    toggleIcon.attr('class', 't7-d3-tree-diagram__toggle')

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
    toggleIcon.attr('style', function (d) {
      if (!d.children && !d._children) {
        return 'display:none'
      }
    })

    // ===========================
    // Add the "arrow right" icon.
    // ===========================

    const arrowIcon = nodeGroup.append('rect')

    arrowIcon.append('rect')
    arrowIcon.attr('width', 16)
    arrowIcon.attr('height', 16)
    arrowIcon.attr('x', rectW - 25)
    arrowIcon.attr('y', 10)
    arrowIcon.attr('rx', 4)
    arrowIcon.attr('ry', 4)
    arrowIcon.attr('class', 't7-d3-tree-diagram__icon-arrow-right')
    arrowIcon.attr('fill', 'url(#t7-d3-tree-diagram__icon-arrow-right)')

    // Show/Hide menu.
    arrowIcon.on('click', function (d) {
      arrowMenuToggle(d, this)
    })

    // Hide, if no data.
    arrowIcon.attr('style', function (d) {
      if (!config.menu[d.type]) {
        return 'display:none'
      }
    })

    // ==============
    // Add node name.
    // ==============

    const itemName = nodeGroup.append('text')

    itemName.attr('x', 50)
    itemName.attr('y', 30)
    itemName.attr('dy', '0.35em')
    itemName.attr('text-anchor', 'start')
    itemName.attr('class', 't7-d3-tree-diagram__name')

    itemName.text(function (d) {
      return d.name
    })

    // ==================================
    // Add item number (account, tax ID).
    // ==================================

    const itemNumber = nodeGroup.append('text')

    itemNumber.attr('x', 50)
    itemNumber.attr('y', 50)
    itemNumber.attr('dy', '0.35em')
    itemNumber.attr('text-anchor', 'start')
    itemNumber.attr('class', 't7-d3-tree-diagram__mute')

    itemNumber.text(function (d) {
      return d.number
    })

    // Hide, if no data.
    itemNumber.attr('style', function (d) {
      if (!d.number) {
        return 'display:none'
      }
    })

    // =====================
    // Add node description.
    // =====================

    const itemDesc = nodeGroup.append('text')

    itemDesc.attr('x', 50)

    itemDesc.attr('y', function (d) {
      var n = 50

      if (d.number) {
        n = 70
      }

      return n
    })

    itemDesc.attr('dy', '0.35em')
    itemDesc.attr('text-anchor', 'start')
    itemDesc.attr('class', 't7-d3-tree-diagram__mute')

    itemDesc.text(function (d) {
      var date = d.date || ''
      var mv = d.mv || ''

      if (mv) {
        mv = 'MV ' + mv
      }

      if (date) {
        date = 'as of ' + date
      }

      const str = [
        mv,
        date
      ].join(' ')

      return str
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
        .attr('transform', function (d) {
          return 'translate(' + d.x + ',' + d.y + ')'
        })

      // Nodes: closing transition.
      allNodes
        .exit()
        .transition()
        .duration(duration)
        .attr('transform', function (d) {
          return 'translate(' + source.x + ',' + source.y + ')'
        })
        .remove()

      // Links: opening transition.
      allLinks
        .transition()
        .duration(duration)
        .attr('d', elbowLink)

      // Links: closing transition.
      allLinks
        .exit()
        .transition()
        .duration(duration)
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
        .attr('transform', function (d) {
          return 'translate(' + d.x + ',' + d.y + ')'
        })

      // Nodes: closed.
      allNodes
        .exit()
        .remove()

      // Links: open.
      allLinks.attr('d', elbowLink)

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

  /*
    Called when the React component
    is mounted, or has updated data.
  */
  render (data) {
    this.data = data
    this.destroy()
    this.setup()
  }
}
