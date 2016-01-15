import d3 from 'd3'

export default class Chart {
  constructor (el, props) {
    this.el = el
    this.setConfig()
    this.bindResize()

    // Callback for clicking a "leaf".
    this.handleClickLeaf =
      props.handleClickLeaf || function () {}
  }

  setConfig () {
    this.config = {
      duration: 500,
      rectW: 260,
      rectH: 130
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
    const rectW = this.config.rectW
    const rectH = this.config.rectH

    const startX = d.source.x + (rectW / 2)
    const startY = d.source.y + (rectH / 2)

    const midY =
    (d.source.y + ((d.target.y - d.source.y) * 0.5)) + (rectH / 2)

    const endX = (d.target.x + (rectW / 2))
    const endY = (d.target.y + (rectH / 2))

    const value =
      // Move to: X, Y.
      'M' + startX + ',' + startY +

      // Vertical line.
      'V' + midY +

      // Horizontal line.
      'H' + endX +

      // Vertical line.
      'V' + endY

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

  nodeToggle (d) {
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

  nodeToggleFill (d, el) {
    var fill = 'none'

    if (d.children) {
      fill = 'url(#t7-d3-tree-diagram__icon-minus)'
    } else if (d._children) {
      fill = 'url(#t7-d3-tree-diagram__icon-plus)'
    }

    return fill
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

    const rectW = this.config.rectW
    const rectH = this.config.rectH

    const offset = (width / 2) - (rectW / 2)

    this.tree = d3.layout.tree()

    this.tree.separation(function () {
      return 1
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
    const elbowLink = this.elbowLink.bind(this)
    const nodeToggle = this.nodeToggle.bind(this)
    const nodeToggleFill = this.nodeToggleFill.bind(this)

    // Defined in the React `props`.
    const handleClickLeaf = this.handleClickLeaf.bind(this)

    // Options from `this.setConfig`.
    const duration = this.config.duration
    const rectW = this.config.rectW
    const rectH = this.config.rectH

    // Compute tree layout.
    const nodes = this.tree.nodes(data)
    const links = this.tree.links(nodes)

    // Loop through nodes.
    nodes.forEach(function (d) {
      // Normalize depth.
      d.y = d.depth * (rectH + 50)
    })

    // Used in loop.
    var i = 0

    // Update the nodes.
    const allNodes = this
      .svg
      .selectAll('.t7-d3-tree-diagram__node')
      .data(nodes, function (d) {
        // Increment counter.
        i++

        // Assign ID.
        d.id = d.id || i

        return d.id
      })

    // Create elements per node.
    const allNodesEnter =
      allNodes
      .enter()
      .append('g')
      .attr('class', 't7-d3-tree-diagram__node')
      .attr('transform', function (d) {
        const x = source.x0 || source.x
        const y = source.y0 || source.y

        return 'translate(' + x + ',' + y + ')'
      })

    // Add rectangles.
    allNodesEnter
      .append('rect')
      .attr('class', 't7-d3-tree-diagram__rect')
      .attr('width', rectW)
      .attr('height', function (d) {
        const t = d.type

        var n = rectH

        if (t === 'superHouse') {
          n = rectH - 40
        }

        if (t === 'household') {
          n = rectH - 35
        }

        if (t === 'taxtEntity' || t === 'account') {
          if (!d.alertText) {
            // TODO.
          }
        }

        return n
      })
      .attr('rx', 4)
      .attr('ry', 4)
      .on('click', handleClickLeaf)
      .on('mouseover', function (d) {
        d3.select(this).classed({
          't7-d3-tree-diagram__rect': true,
          't7-d3-tree-diagram__rect--hover': true
        })
      })
      .on('mouseout', function (d) {
        d3.select(this).classed({
          't7-d3-tree-diagram__rect': true,
          't7-d3-tree-diagram__rect--hover': false
        })
      })

    // Add the "type" icon.
    allNodesEnter
      .append('rect')
      .attr('width', 24)
      .attr('height', 24)
      .attr('x', 15)
      .attr('y', 20)
      .attr('class', 't7-d3-tree-diagram__icon-type')
      .attr('fill', function (d) {
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

    // Add the "status" icon.
    allNodesEnter
      .append('rect')
      .attr('width', 16)
      .attr('height', 16)
      .attr('x', 50)
      .attr('y', 90)
      .attr('class', 't7-d3-tree-diagram__icon-status')
      .attr('fill', function (d) {
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
      .attr('style', function (d) {
        if (!d.status) {
          return 'display:none'
        }
      })

    // Add the "updated by" icon.
    allNodesEnter
      .append('rect')
      .attr('width', 16)
      .attr('height', 16)
      .attr('x', 75)
      .attr('y', 90)
      .attr('class', 't7-d3-tree-diagram__icon-updated-by')
      .attr('fill', function (d) {
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
      .attr('style', function (d) {
        if (!d.updatedBy) {
          return 'display:none'
        }
      })

    // Add the "percent" icon.
    allNodesEnter
      .append('rect')
      .attr('width', 16)
      .attr('height', 16)
      .attr('x', 100)
      .attr('y', 90)
      .attr('class', 't7-d3-tree-diagram__icon-percent')
      .attr('fill', function (d) {
        const p = d.percent

        var fill = 'none'

        // Percent exists?
        if (p) {
          fill = 'url(#t7-d3-tree-diagram__icon-people)'
        }

        return fill
      })
      .attr('style', function (d) {
        if (!d.percent) {
          return 'display:none'
        }
      })

    // Add node name.
    allNodesEnter
      .append('text')
      .attr('x', 119)
      .attr('y', 98)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'start')
      .attr('class', 't7-d3-tree-diagram__percent')
      .text(function (d) {
        return d.percent
      })
      .attr('style', function (d) {
        if (!d.percent) {
          return 'display:none'
        }
      })

    // Add the "+/-" toggle.
    allNodesEnter
      .append('rect')
      .attr('width', 16)
      .attr('height', 16)
      .attr('x', 18)
      .attr('y', 55)
      .attr('rx', 4)
      .attr('ry', 4)
      .attr('class', 't7-d3-tree-diagram__toggle')
      .attr('style', function (d) {
        if (!d.children && !d._children) {
          return 'display:none'
        }
      })
      .attr('fill', function (d) {
        return nodeToggleFill(d, this)
      })
      .on('click', function (d) {
        nodeToggle(d)

        // `this` means the element itself.
        const fill = nodeToggleFill(d, this)

        d3.select(this).attr('fill', fill)
      })

    // Add node name.
    allNodesEnter
      .append('text')
      .attr('x', 50)
      .attr('y', 30)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'start')
      .attr('class', 't7-d3-tree-diagram__name')
      .text(function (d) {
        return d.name
      })

    // Add node number (account, tax ID).
    allNodesEnter
      .append('text')
      .attr('x', 50)
      .attr('y', 50)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'start')
      .attr('class', 't7-d3-tree-diagram__description')
      .text(function (d) {
        return d.number
      })
      .attr('style', function (d) {
        if (!d.number) {
          return 'display:none'
        }
      })

    // Add node description.
    allNodesEnter
      .append('text')
      .attr('x', 50)
      .attr('y', function (d) {
        var n = 50

        if (d.number) {
          n = 70
        }

        return n
      })
      .attr('dy', '0.35em')
      .attr('text-anchor', 'start')
      .attr('class', 't7-d3-tree-diagram__description')
      .text(function (d) {
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

    // Associate links with targets.
    const allLinks = this
      .svg
      .selectAll('.t7-d3-tree-diagram__link')
      .data(links, function (d) {
        return d.target.id
      })

    // Apply "elbow" style to links.
    allLinks
      .enter()
      .insert('path', 'g')
      .attr('class', 't7-d3-tree-diagram__link')
      .attr('x', rectW / 2)
      .attr('y', rectH / 2)
      .attr('d', function (d) {
        const o = {
          x: source.x0 || source.x,
          y: source.y0 || source.y
        }

        return elbowLink({
          source: o,
          target: o
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
          const o = {
            x: source.x,
            y: source.y
          }

          return elbowLink({
            source: o,
            target: o
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

    // Stash positions.
    nodes.forEach(function (d) {
      d.x0 = d.x
      d.y0 = d.y
    })
  }
}
