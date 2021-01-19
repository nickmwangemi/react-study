import {useState} from 'react'


export default function Counter() {
    const [counter, setCounter] = useState(0)

    const handleClick = ()=> setCounter(counter + 1)

    return (
        <button
            onClick={handleClick}
        
        >
           Click HERE to increment: {counter}
        </button>
    )
}
