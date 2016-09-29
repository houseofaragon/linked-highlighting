require('normalize.css/normalize.css');
require('../styles/App.css');

import React from 'react';
import LineChart from '../components/LineChartComponent'
import RadialHeatmap from '../components/RadialHeatmapComponent'
import {connect} from 'react-redux'
import { setInitialState, onMouseEnter, onMouseLeave} from '../actions'
class App extends React.Component {

  componentDidMount() {
    console.log('dispatch, ', this.props.dispatch)
    const {dispatch} = this.props;
    dispatch(setInitialState())
  }

  render() {
    const {data, height, width, xKey, yKey, highlighted, dispatch} = this.props;

    return (
      <div className='main'>
        <LineChart data={data} width={width} height={height} xKey={xKey} yKey={yKey} highlighted={highlighted} />
        <RadialHeatmap onMouseEnter={(d) => dispatch(onMouseEnter(d))}
                       onMouseLeave={(d) => dispatch(onMouseLeave(d))}
                       data={data} width={width} height={height}
                       radiusKey={xKey} colorKey={yKey} highlighted={highlighted} />
      </div>
    )
  }
}

App.propTypes = {
  data: React.PropTypes.array.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  xKey: React.PropTypes.string, // the key for the x value
  yKey: React.PropTypes.string, // the key for the y value
}

function mapStateToProps (state) {
  let {data, height, width, xKey, yKey, highlighted} = state
  return {data, height, width, xKey, yKey, highlighted}
}

export default connect(mapStateToProps)(App)
