import '../styles/Adjuster.css'
import { useState, useEffect } from 'react'

const Adjuster = ({setter, title, min, max, isSorting}) => {
    return (
        <div className="adjuster">
            <p><b>{title}:</b></p>
            <input className='slider' type="range" min={min} max={max} onChange={(e) => {if (!isSorting) setter(e.target.value)}}/>
        </div>
    )
}

export default Adjuster
