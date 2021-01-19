import {useState} from 'react'

export default function TextInput() {

    const [userInput, setUserInput] = useState('')

    const handleChange = (event) => {
        setUserInput(event.target.value)
    }

    return (
        <div>
        <label htmlFor={'my-input'}>Enter text:</label>
        <input 
            // id={'my-input'}
            type={"text"}
            value={userInput}
            placeholder={'Type here'} 
            
            onChange={handleChange}
        />
        <br/>
        <br/>

        You entered: {userInput}
            
        </div>
    )
}
