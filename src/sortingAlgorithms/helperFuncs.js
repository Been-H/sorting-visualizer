import { ACTIONS } from "../App"

export const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

export async function updateAndDelay(dispatch, array, time) {
    dispatch({ type: ACTIONS.SET_ELEMENTS, payload: { values: array.slice()}})              
    await sleep(time)
}

export function changeColor(array, color, start, end) {
  let startPosition = (start ? start : 0)
  let endPosition = (end ? end : array.length)
  for (var i = startPosition; i < endPosition; i++) {
    array[i].color = color
  }
}