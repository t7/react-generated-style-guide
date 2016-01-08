import d3 from 'd3'

export default class Chart {
  constructor (el) {
    this.el = el
    this.setConfig()
    this.bindResize()
  }

  setConfig () {
    this.config = {}
    this.config.rectW = 110
    this.config.rectH = 30
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

  /*
    Called when the React component
    is mounted, or has updated data.
  */
  render (data) {
    this.data = data
    this.redraw()
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
    // TODO.
    console.log('test')

    if (d.children) {
      d._children = d.children
      d.children = null
    } else {
      d.children = d._children
      d._children = null
    }
  }

  /*
    This is called via `this.render`
    or when the window is resized.
  */
  redraw () {
    // Destroy, if it exists.
    this.destroy()

    // Get data set in `render`.
    const data = this.data

    // Exit, if no data.
    if (!data || !Object.keys(data).length) {
      return
    }

    const setPan = this.setPan.bind(this)
    const elbowLink = this.elbowLink.bind(this)
    const nodeToggle = this.nodeToggle.bind(this)

    const width = this.el.offsetWidth
    const height = this.el.offsetHeight

    const rectW = this.config.rectW
    const rectH = this.config.rectH

    const offset = (width / 2) - (rectW / 2)

    const tree = d3.layout.tree()

    // Set default node size.
    tree.nodeSize([
      rectW + 20,
      rectH + 20
    ])

    // Compute tree layout.
    const nodes = tree.nodes(data)
    const links = tree.links(nodes)

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

    // Normalize depth.
    nodes.forEach(function (d) {
      d.y = d.depth * 100
    })

    // Used in loop.
    var i = 0

    // Update the nodes.
    const allNodes = this
      .svg
      .selectAll()
      .data(nodes, function (d) {
        // Increment counter.
        i++

        // Assign ID.
        d.id = d.id || i

        return d.id
      })

    // Create elements per node.
    const allNodesInner = allNodes.enter().append('g')

    // Add rectangles.
    allNodesInner
      .append('rect')
      .attr('class', 't7-d3-tree-diagram__rect')
      .attr('width', rectW)
      .attr('height', rectH)

    // Add text.
    allNodesInner
      .append('text')
      .attr('x', rectW / 2)
      .attr('y', rectH / 2)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .text(function (d) {
        return d.name
      })

    // Loop through nodes.
    allNodes
      // Place nodes in position.
      .attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')'
      })
      // Click event.
      .on('click', nodeToggle)

    // Update the links.
    const allLinks = this
      .svg
      .selectAll()
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
      .attr('d', elbowLink)
  }
}
