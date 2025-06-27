import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Kiran",
    Age : 22
  }
  let newArr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind test </h1> 
    <br></br>
    <Card username = 'Chai aur code' btnText = "Clickme" />
    <br/>
    <Card username= 'Kiran Dada' btnText = "Visit me"/>
    
    </>
  )
}

export default App
