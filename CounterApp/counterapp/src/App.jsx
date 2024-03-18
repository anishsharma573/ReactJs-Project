import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className='App'>
      <header className='App'>
        <h1 >Counter App using state</h1>
      </header>
      <h1>Current Count is {count}</h1>
      <button onClick={()=>setCount(0)}>Reset Count</button>
      <button onClick={()=>count>=10?"":setCount(count+1)} >Increase Count</button>
      <button onClick={()=>count<=-10?"":setCount(count-1)}>Decrease Count Count</button>
    </div>
  )
}

export default App
