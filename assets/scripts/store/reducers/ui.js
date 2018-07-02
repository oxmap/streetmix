import {
  SHOW_STREET_NAME_CANVAS,
  HIDE_STREET_NAME_CANVAS,
  SET_UNIT_SETTINGS,
  UPDATE_DRAGGING_STATE
} from '../actions'
import * as constants from '../../users/constants'

const initialState = {
  streetNameCanvasVisible: true,
  unitSettings: {
    resolution: constants.SEGMENT_WIDTH_RESOLUTION_METRIC,
    draggingResolution: constants.SEGMENT_WIDTH_DRAGGING_RESOLUTION_METRIC,
    clickIncrement: constants.SEGMENT_WIDTH_CLICK_INCREMENT_METRIC
  }
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
    case SET_UNIT_SETTINGS:
      const imperial = (action.unit === constants.SETTINGS_UNITS_IMPERIAL)
      return {
        ...state,
        unitSettings: {
          resolution: (imperial) ? constants.SEGMENT_WIDTH_RESOLUTION_IMPERIAL : constants.SEGMENT_WIDTH_RESOLUTION_METRIC,
          draggingResolution: (imperial) ? constants.SEGMENT_WIDTH_DRAGGING_RESOLUTION_IMPERIAL : constants.SEGMENT_WIDTH_DRAGGING_RESOLUTION_METRIC,
          clickIncrement: (imperial) ? constants.SEGMENT_WIDTH_CLICK_INCREMENT_IMPERIAL : constants.SEGMENT_WIDTH_CLICK_INCREMENT_METRIC
        }
      }
    case UPDATE_DRAGGING_STATE:
      const draggingState = {
        segmentBeforeEl: action.segmentBeforeEl,
        segmentAfterEl: action.segmentAfterEl,
        draggedSegment: action.draggedSegment
      }

      return {
        ...state,
        draggingState: (!action.clearState) ? draggingState : null
      }
    default:
      return state
  }
}

export default ui
