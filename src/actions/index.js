export const APP_HIGHLIGHT = 'APP_HIGHLIGHT'
export const APP_HIGHLIGHT_REMOVE = 'APP_HIGHLIGHT_REMOVE'
export const APP_SET_INITIAL_STATE = 'APP_SET_INITIAL_STATE'

export const onMouseEnter = (point) => (
  {
    type: APP_HIGHLIGHT,
    highlighted: point
  }
)
export const onMouseLeave = () => (
  {
    type: APP_HIGHLIGHT_REMOVE
  }
)

export const setInitialState = () => (
  {
    type: APP_SET_INITIAL_STATE
  }
)
