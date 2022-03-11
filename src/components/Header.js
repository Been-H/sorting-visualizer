import Adjuster from './Adjuster'
import '../styles/Header.css'
import '../index.css'
import { ALGORITHMS } from '../App'

const Header = ({setLength, setSpeed, selectedAlgorithm, setSelectedAlgorithm, isSorting}) => {
    return (
        <header>
            <nav>
                <div className="adjusters">
                    <Adjuster setter={setLength} isSorting={isSorting} title={"Array Size"} min={4} max={100}/>
                    <Adjuster setter={setSpeed} isSorting={isSorting} title={"Sorting Speed"} min={1} max={700}/>
                </div>
                
                <div className="title">
                    <h3>Sorting Algorithm Visualizer</h3>
                </div>
                <div className="algorithms">
                    <a onClick={() => {setSelectedAlgorithm(ALGORITHMS.BUBBLE_SORT)}} style={{'color': selectedAlgorithm == ALGORITHMS.BUBBLE_SORT ? 'red' : 'white'}}>Bubble Sort</a>
                    <a onClick={() => {setSelectedAlgorithm(ALGORITHMS.QUICK_SORT)}} style={{'color': selectedAlgorithm == ALGORITHMS.QUICK_SORT ? 'red' : 'white'}}>Quick Sort</a>
                </div>
            </nav>
        </header>
    )
}

export default Header
