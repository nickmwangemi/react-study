import {useState} from 'react'
import Card from './Card'


function randomColor(){
    return `#${Math.random().toString(16).substr(-6)}`
}

export default function ColorChanger() {
    const [color, setColor] = useState('purple')
  const [counter, setCounter] = useState(0)

  return (
    <div>
     <Card color={color}>
      <input 
        type={'button'}
        value={'Click Me to Change Color'}
        onClick={()=> setColor(randomColor())}
      />


      <input 
        type={'button'}
        value={`No of Clicks ${counter}`}
        onClick={()=> setCounter(counter + 1)}
      />
     </Card>
    </div>
  );
}
