import d3 from 'd3'

export default class Chart {
  constructor (el) {
    this.el = el
    this.setConfig()
    this.bindResize()
  }

  setConfig () {
    this.config = {}
    this.config.rectWidth = 110
    this.config.rectHeight = 30
  }

  bindResize () {
    const redraw = this.redraw.bind(this)
    window.addEventListener('resize', redraw)
  }

  unbindResize () {
    const redraw = this.redraw.bind(this)
    window.removeEventListener('resize', redraw)
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

  setPan () {
    this.svg.attr(
      'transform',
      'translate(' + d3.event.translate + ')' +
      ' ' +
      'scale(' + d3.event.scale + ')'
    )
  }

  elbowLink (d) {
    const rectWidth = this.config.rectWidth
    const rectHeight = this.config.rectHeight

    const startX = d.source.x + (rectWidth / 2)
    const startY = d.source.y + (rectHeight / 2)

    const midY = (d.source.y + ((d.target.y - d.source.y) * 0.5)) + (rectHeight / 2)

    const endX = (d.target.x + (rectWidth / 2))
    const endY = (d.target.y + (rectHeight / 2))

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

    var z
    var i = 0

    const setPan = this.setPan.bind(this)
    const elbowLink = this.elbowLink.bind(this)

    const width = this.el.offsetWidth
    const height = this.el.offsetHeight

    const rectWidth = this.config.rectWidth
    const rectHeight = this.config.rectHeight

    const offset = (width / 2) - (rectWidth / 2)

    const tree = d3.layout.tree()

    // Set default node size.
    tree.nodeSize([
      rectWidth + 20,
      rectHeight + 20
    ])

    // Compute tree layout.
    const nodes = tree.nodes(data)
    const links = tree.links(nodes)

    this.svg = d3
      .select(this.el)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .call(z = d3.behavior.zoom().scaleExtent([1, 1]).on('zoom', setPan))
      .append('g')
      .attr('transform', 'translate(' + offset + ',' + 20 + ')')

    // Zoom point of origin.
    z.translate([offset, 20])

    // Normalize depth.
    nodes.forEach(function (d) {
      d.y = d.depth * 100
    })

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

    // Enter any new nodes at the parent's previous position.
    const allNodesInner = allNodes.enter().append('g')

    allNodesInner
      .attr('transform', function (d) {
        return 'translate(' + 0 + ',' + height / 2 + ')'
      })

    allNodesInner
      .append('rect')
      .attr('class', 't7-d3-tree-diagram__rect')
      .attr('width', rectWidth)
      .attr('height', rectHeight)

    allNodesInner
      .append('text')
      .attr('x', rectWidth / 2)
      .attr('y', rectHeight / 2)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .text(function (d) {
        return d.name
      })

    // Place nodes in position.
    allNodes
      .attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')'
      })

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
      .attr('x', rectWidth / 2)
      .attr('y', rectHeight / 2)
      .attr('d', elbowLink)
  }
}
