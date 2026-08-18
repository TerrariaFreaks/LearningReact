import { useState, useRef, useEffect } from 'react'
import './App.css'


const OTP_DIGIT_COUNT = 5

function App() {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""))

  const refArr = useRef([])

  useEffect(() => {
    refArr.current[0]?.focus()
  }, [])

  const handleOnChange = (value, idx) => {
    if (isNaN(value)) return

    const newValue = value.trim()
    const newArr = [...inputArr]
    newArr[idx] = newValue.slice(-1)
    setInputArr(newArr)

    newValue && refArr.current[idx+1]?.focus()
  }

  const handleKeyDown = (e, idx) => {
    if (!e.target.value && e.key === "Backspace"){
      refArr.current[idx-1].focus()
    }
  }

  return (
    <div>
      <h1>Validate OTP</h1>
      {inputArr.map((input, idx) => {
        return <input className='otp-input' key={idx} type="text" value={inputArr[idx]}
        ref={input=> {refArr.current[idx] = input}}
        onChange={(e) => handleOnChange(e.target.value, idx)}
        onKeyDown={(e) => handleKeyDown(e, idx)}
        />
      })}
    </div>
  )
}

export default App
