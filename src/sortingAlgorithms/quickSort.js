import { COLORS, DELAYS } from "../App"
import { changeColor, updateAndDelay } from "./helperFuncs"


export async function quickSort(arr, start, end, dispatch, speed) {
  await updateAndDelay(dispatch, arr, 0)
  if (start >= end) {
    return;
  }
  
  let index = await partition(arr, start, end, dispatch, speed);
  await Promise.all([quickSort(arr, start, index - 1, dispatch, speed), quickSort(arr, index + 1, end, dispatch, speed)])
  
  await updateAndDelay(dispatch, arr, 0)
}

async function partition(arr, start, end, dispatch, speed) {
  let pivot = arr[end]
  let pivotIndex = start
  let globalI = 0
  
  pivot.color = COLORS.COMPARER
  await updateAndDelay(dispatch, arr, speed)
  
  for (let i = start; i < end; i++) {
    arr[i].color = COLORS.FOCUSED
    arr[pivotIndex].color = COLORS.FOCUSED
    await updateAndDelay(dispatch, arr, speed)
    console.log(arr[i].value, pivot.value)
    if (arr[i].value < pivot.value) {
      arr[i].color = COLORS.INCORRECT
      arr[pivotIndex].color = COLORS.INCORRECT
      await updateAndDelay(dispatch, arr, speed) 
      swap(arr, i, pivotIndex);
      await updateAndDelay(dispatch, arr, speed) 
      arr[i].color = COLORS.FOCUSED
      arr[pivotIndex].color = COLORS.FOCUSED
      await updateAndDelay(dispatch, arr, speed)
      arr[pivotIndex].color = COLORS.DEFAULT
      pivotIndex++;
    }
    arr[i].color = COLORS.DEFAULT
    globalI = i
  }

  arr[pivotIndex].color = COLORS.INCORRECT
  pivot.color = COLORS.INCORRECT
  await updateAndDelay(dispatch, arr, speed)
  swap(arr, pivotIndex, end);
  arr[end].color = COLORS.DEFAULT
  pivot.color = COLORS.FINAL
  if (globalI === pivotIndex) {
    arr[end].color = COLORS.FINAL
    
  }
  await updateAndDelay(dispatch, arr, speed)
  
  return pivotIndex;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}