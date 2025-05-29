import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);
  //let counter = 0
  const addValue = () =>{
    if(setCounter >=20){
      alert(`Can't increment value further than ${counter}`);
      return;
    }
    setCounter(counter +1); 
      
  }

  const removeValue = () =>{
    if(setCounter <=- 20){
      alert(`Can't decrement value further than ${counter}`);
      return;
    }
    setCounter(counter -1);
    
    } 
  return (
    <>
      <h1>Welcome to  Digital Counter</h1>
      <h2>Counter Value:{counter}</h2>
      <button
      onClick={addValue} disabled={counter >= 5}
      >Add Value:</button>
      <br/>
      <button
      onClick={removeValue} disabled={counter <= -20}
      >Remove Value:</button>
    </>
  )
}

export default App
