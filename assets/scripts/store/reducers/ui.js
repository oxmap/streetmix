import {
  SHOW_STREET_NAME_CANVAS,
  HIDE_STREET_NAME_CANVAS,
  SET_HOVERED_SEGMENT
} from '../actions'

const initialState = {
  streetNameCanvasVisible: true
}

const ui = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_STREET_NAME_CANVAS:
      return {
        ...state,
        streetNameCanvasVisible: true
      }
    case HIDE_STREET_NAME_CANVAS:
      return {
        ...state,
        streetNameCanvasVisible: false
      }
    case SET_HOVERED_SEGMENT:
      return {
        ...state,
        hoveredSegment: action.hoveredSegment
      }
    default:
      return state
  }
}

export default ui
