import React from 'react'
import { ALGORITHMS, COLORS } from '../App'
import { bubbleSort } from '../sortingAlgorithms/bubbleSort'
import { quickSort } from '../sortingAlgorithms/quickSort'
import '../styles/Button.css'

const Button = ({text, array, dispatch, algorithm, speed, setIsSorting}) => {
    return (
        <button onClick={() => algorithm === ALGORITHMS.QUICK_SORT ? quickSort(array, 0, array.length -1, dispatch, speed) : bubbleSort(array, dispatch, speed)} href="" className="button">{text}</button>
    )
}

export default Button
