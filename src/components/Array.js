import '../styles/Array.css'
import Bar from './Bar'

const Array = ({array}) => {

    return (
        <div className="array">
            {array.map((element) => (<Bar value={element.value} color={element.color}/>))}
        </div>
    )
}

export default Array
