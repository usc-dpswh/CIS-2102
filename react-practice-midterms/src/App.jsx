import { useState, useContext } from 'react'
import './App.css'
import users from './PseudoDatabase'

import { Link } from 'react-router-dom'
import AppContext from './context/AppContext'

function App() {
  const ctx = useContext(AppContext)
  
  return (
    <>

      <h1>Welcome to the site!</h1>

      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>

    </>
  )
}

export default App
