import {useState} from 'react'
import './App.css';
import Card from './components/Card';

// root component
// class based/function based
// JSX - JavaScript and XML

function randomColor(){
  return `#${Math.random().toString(16).substr(-6)}`
}


function App() {
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

export default App;



