import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import FirstActivity from './routes/FirstActivity';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React RouteIvity</h1>
      <div>
      <BrowserRouter>
      <Routes>
        
        <Route path="input-student" element={FirstActivity}>First</Route>
        
      </Routes>
    </BrowserRouter>
      </div>
    </>
  )
}

export default App
