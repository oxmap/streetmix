import {
  SHOW_STREET_NAME_CANVAS,
  HIDE_STREET_NAME_CANVAS,
  SET_UNIT_SETTINGS,
  UPDATE_DRAGGING_STATE
} from './index'

export function showStreetNameCanvas () {
  return {
    type: SHOW_STREET_NAME_CANVAS
  }
}

export function hideStreetNameCanvas () {
  return {
    type: HIDE_STREET_NAME_CANVAS
  }
}

export function setUnitSettings (unit) {
  return {
    type: SET_UNIT_SETTINGS,
    unit
  }
}

export function updateDraggingState (segmentBeforeEl, segmentAfterEl, draggedSegment) {
  return {
    type: UPDATE_DRAGGING_STATE,
    segmentBeforeEl,
    segmentAfterEl,
    draggedSegment
  }
}

export function clearDraggingState () {
  return {
    type: UPDATE_DRAGGING_STATE,
    clearState: true
  }
}
