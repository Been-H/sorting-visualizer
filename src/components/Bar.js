import '../styles/Bar.css'
import '../index.css'

const Bar = ({value, color}) => {
    return (
        <div style={{height: `${value}%`, backgroundColor: color}}className="bar">
            <p className='placeholder'></p>
        </div>
    )
}

export default Bar
