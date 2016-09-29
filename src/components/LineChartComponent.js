'use strict'

import React from 'react'
const d3 =  require('d3')

require('styles/LineChart.css');

class LineChart extends React.Component {
  render() {
    const { data, width, height, xKey, yKey } = this.props;

    // create x and y scales that map the chart dimensions to the min/max x and y values in the data
    const xMin = 0, xMax = width, yMin = height, yMax = 0;
    const x = d3.scaleLinear().domain(d3.extent(data, (d) => d[xKey])).range([xMin, xMax]);
    const y = d3.scaleLinear().domain(d3.extent(data, (d) => d[yKey])).range([yMin, yMax]);
    // function to generate an svg path's d attribute for the series
    // note: interpolation set to 'monotone' ensures the path goes through the points
    const line = d3.line()
      .curve(d3.curveMonotoneX)
      .x((d) => x(d[xKey]))
      .y((d) => y(d[yKey]));

    return (
      <div>
        <svg ref='svg' width={width} height={height} className='chart line-chart'>
          <path d={line(data)} className='series' />
        </svg>
      </div>
    )
  }
}

LineChart.propTypes = {
  data: React.PropTypes.array.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  xKey: React.PropTypes.string, // the key for the x value
  yKey: React.PropTypes.string // the key for the y value
}

LineChart.defaultProps = {
  xKey: 'x',
  yKey: 'y'
}

export default LineChart;
