import 'core-js/fn/object/assign';
import React from 'react';
import App from './container/Main';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
require('babel-polyfill')

import configureStore from './stores'

const store = configureStore()

render(
  <Provider store={store}>
      <App />
  </Provider>, document.getElementById('app')
)
