// Hooks are used for change in multilple state chages
// i.e. add value change 
// less value also change


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 15

  const addValue = () => {
    // console.log("value added", counter)
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)

  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Less Value</button>
    </>
  )
}

export default App
