import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React RoutIvity</h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>

        <Link to="/input-student">
          <button className='button--link'>First Reactivity</button>
        </Link>

        <Link to="/form-validate">
          <button className='button--link'>Second Reactivity</button>
        </Link>

      </div>
    </>
  )
}

export default App
