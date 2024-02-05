import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'Diya',
    age: 22
  }

  let newArr = [1,2,3,4]

  return (
    <>
    <h1 className='bg-green-400 rounded-xl mb-2'> Tailwind test</h1>
    <Card username="Diya Karmakar" btnText="Click me"/>
    <Card username="Debapriya C"/>
    </>
  )
}

export default App
