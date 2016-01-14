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
      rectW: 250,
      rectH: 100
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
      fill = 'url(#t7-d3-tree-diagram__toggle--minus)'
    } else if (d._children) {
      fill = 'url(#t7-d3-tree-diagram__toggle--plus)'
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

    this.defs = this.root.append('defs')

    this.createIcon({
      id: 't7-d3-tree-diagram__toggle--plus',
      path: '/static/images/t7-d3-tree-diagram__toggle--plus.svg',
      width: 10,
      height: 10,
      x: 3,
      y: 3
    })

    this.createIcon({
      id: 't7-d3-tree-diagram__toggle--minus',
      path: '/static/images/t7-d3-tree-diagram__toggle--minus.svg',
      width: 10,
      height: 10,
      x: 3,
      y: 3
    })

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
      .attr('height', rectH)
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

    // Add the "+/-" toggle.
    allNodesEnter
      .append('rect')
      .attr('width', 16)
      .attr('height', 16)
      .attr('x', 20)
      .attr('y', 50)
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

    // Add text.
    allNodesEnter
      .append('text')
      .attr('x', 60)
      .attr('y', 30)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'start')
      .attr('class', 't7-d3-tree-diagram__name')
      .text(function (d) {
        return d.name
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
