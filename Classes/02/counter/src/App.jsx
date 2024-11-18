import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 15

  const addValue = () => {
    console.log("value added", Math.random())
  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button>Less Value</button>
    </>
  )
}

export default App
