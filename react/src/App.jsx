import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div className='bg-red-500'>
        <h1>{count}</h1>
      </div>
        
    </>
  )
}

export default App
