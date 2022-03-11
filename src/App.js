import Header from './components/Header'
import Array from './components/Array'
import Button from './components/Button'
import { useState, useReducer, useEffect } from 'react'

export const ACTIONS = {
    SET_VALUES: 'set-values'
}

export const COLORS = {
  DEFAULT: '#5089C6',
  FOCUSED: '#1cff7e',
  INCORRECT: '#ff1c1c',
  COMPARER: '#ffe70f',
  FINAL: '#ff4ded', 
}

export const DELAYS = {
  FLASH_GREEN: 1000,
}

export const ALGORITHMS = {
  BUBBLE_SORT: 'bubbleSort',
  QUICK_SORT: 'quickSort'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_ELEMENTS:
      return action.payload.values
    default:
      return state
  }
}

function App() {
  
  const [array, dispatch] = useReducer(reducer, [])
  const [length, setLength] = useState(4)
  const [speed, setSpeed] = useState(700)
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(ALGORITHMS.BUBBLE_SORT)

  const [isSorting, setIsSorting] = useState(false)

  const generateValues = () => {
    var newValues = []
    for (var i = 0; i < length; i++) {
      newValues.push({value: (Math.floor(Math.random() * (100 - 10) + 10)), color: COLORS.DEFAULT})
    }
    dispatch({ type: ACTIONS.SET_ELEMENTS, payload: {values: newValues} })
  }

  useEffect(() => {
      generateValues()
  }, [length])

  useEffect(() => {
    console.log(speed)
  }, [speed])

  return (
    
    <div className="App">
      <Header setLength={setLength} setSpeed={setSpeed} selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} isSorting={isSorting}/>
      <Array array={array}/>
      <Button text={'Sort!'} array={array} dispatch={dispatch} algorithm={selectedAlgorithm} speed={speed} setIsSorting={setIsSorting}/>
    </div>
  );
}

export default App;