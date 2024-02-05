import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 5

  const addValue = () => {
    console.log("Clicked", counter);
    //counter = counter+1
    if(counter<20)
    setCounter(counter+1)
  }

  const removeValue = () => {
    if(counter >0)
    setCounter(counter-1)
  }
  return (
    <>
    <h1>Monday</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}>Add Value</button>
    <br />
    <button
    onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
