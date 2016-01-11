import d3 from 'd3'

export default class Chart {
  constructor (el) {
    this.el = el
    this.setConfig()
    this.bindResize()
  }

  setConfig () {
    this.config = {
      duration: 500,
      rectW: 110,
      rectH: 30
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

    this.update(d)
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

    const root = d3
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

    this.svg = root
      .append('g')
      .attr('transform', 'translate(' + offset + ',' + 20 + ')')

    this.update(data)
  }

  // Called via `this.render`.
  update (source) {
    // Get data set in `render`.
    const data = this.data

    // Exit, if no data.
    if (!source || !Object.keys(data).length) {
      return
    }

    // const setPan = this.setPan.bind(this)
    const elbowLink = this.elbowLink.bind(this)
    const nodeToggle = this.nodeToggle.bind(this)

    const duration = this.config.duration
    const rectW = this.config.rectW
    const rectH = this.config.rectH

    // Compute tree layout.
    const nodes = this.tree.nodes(data)
    const links = this.tree.links(nodes)

    // Normalize depth.
    nodes.forEach(function (d) {
      d.y = d.depth * 100
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
        return 'translate(' + (source.x0 || source.x) + ',' + (source.y0 || source.y) + ')'
      })
      .on('click', nodeToggle)

    // Add rectangles.
    allNodesEnter
      .append('rect')
      .attr('class', 't7-d3-tree-diagram__rect')
      .attr('width', rectW)
      .attr('height', rectH)

    // Add text.
    allNodesEnter
      .append('text')
      .attr('x', rectW / 2)
      .attr('y', rectH / 2)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .text(function (d) {
        return d.name
      })

    // Place nodes in position.
    allNodes
      .transition()
      .duration(duration)
      .attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')'
      })

    allNodes
      .exit()
      .transition()
      .duration(duration)
      .attr('transform', function (d) {
        return 'translate(' + source.x + ',' + source.y + ')'
      })
      .remove()

    // Update the links.
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

    allLinks
      .transition()
      .duration(duration)
      .attr('d', elbowLink)

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

    // Stash positions.
    nodes.forEach(function (d) {
      d.x0 = d.x
      d.y0 = d.y
    })
  }
}
