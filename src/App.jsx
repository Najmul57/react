import { useState } from 'react'
import './App.css'
import Service from './components/Services/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Service />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
