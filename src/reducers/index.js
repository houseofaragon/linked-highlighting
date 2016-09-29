const { APP_HIGHLIGHT, APP_HIGHLIGHT_REMOVE, APP_SET_INITIAL_STATE } = require('../actions')

const data = []
for (let i = 0; i <= 30; i++) {
  data.push({ distance: i, value: Math.random() * 10 + i })
}

const initialState = {
  data: data,
  height: 250,
  width: 450,
  xKey: 'distance', // the key for the x value
  yKey: 'value', // the key for the y value
  highlighted: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_HIGHLIGHT:
      return reduceHighlight(state, action)
    case APP_HIGHLIGHT_REMOVE:
      return reduceHighlightRemove(state)
    case APP_SET_INITIAL_STATE:
      return reduceSetInitialState(state)
    default:
      return state
  }
}

const reduceHighlight = (state, action) => {
  console.log('hello')
  return Object.assign({}, state, { highlighted: action.highlighted})
}

const reduceHighlightRemove = (state) => {
  return Object.assign({}, state, { highlighted: null})
}

const reduceSetInitialState = (state) => {
  return Object.assign({}, state, initialState)
}

export default reducer
