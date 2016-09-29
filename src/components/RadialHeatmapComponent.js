'use strict'

import React from 'react'
const d3 = require('d3')

require('styles/RadialHeatmap.css');

class RadialHeatmap extends React.Component {


  render() {
    const { data, width, height, radiusKey, colorKey, highlighted} = this.props;

    // set up scales for radius and colour based on the min/max in the data set
    const strokeWidth = Math.ceil(width / (data.length * 2));
    const r = d3.scaleLinear()
                .domain(d3.extent(data, (d) => d[radiusKey]))
                .range([strokeWidth, (width - strokeWidth) / 2]);

    const color = d3.scaleLinear()
                    .domain(d3.extent(data, (d) => d[colorKey]))
                    .range(['#edf8b1', '#2c7fb8']);

    return (
      <div>
        <svg  ref='svg' width={width} height={height} className='chart radial-heatmap'>
          {data.map((d, i) => {
            const className = highlighted && d[radiusKey] === highlighted[radiusKey] ? 'highlight' : '';
            console.log(radiusKey)
            return (
              <circle onMouseEnter={this.props.onMouseEnter.bind(this, d)}
                      onMouseLeave={this.props.onMouseLeave())}
                      className={className} key={i} r={r(d[radiusKey])} cx={width / 2} cy={-r(0) / 2}
                      strokeWidth={strokeWidth} stroke={color(d[colorKey])}
                       />
            )
          })}
        </svg>
      </div>
    )
  }
}

RadialHeatmap.propTypes = {
  colorKey: React.PropTypes.string, // the key for the colour value
  data: React.PropTypes.array.isRequired,
  height: React.PropTypes.number.isRequired,
  radiusKey: React.PropTypes.string, // the key for the radius value
  width: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func
}

RadialHeatmap.defaultProps = {
  radiusKey: 'r',
  colorKey: 'color'
}

export default RadialHeatmap;
