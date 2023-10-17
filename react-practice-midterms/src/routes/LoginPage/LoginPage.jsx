import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.module.css'
import AppContext from '../../context/AppContext'

const LoginPage = (props) => {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  })

  const navigate = useNavigate();

  const ctx = useContext(AppContext)

  console.log(userInput);

  const handleChange = (e) => {
    setUserInput(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    ctx.AuthenticateUser(event)
  }

  useEffect(() => {
    ctx.isLoggedIn && navigate("../auth") 
  }, [ctx.isLoggedIn])

  return (
    <>

      <form onSubmit={handleSubmit}>

        <h3>Username</h3>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          required
        />
        {userInput.username === "" ? <h4 style={{ color: "red" }}>No user input</h4> : <h4 style={{ color: "lightgreen"}}>{userInput.username}</h4>}

        <h3>Password</h3>
        <input
          onChange={handleChange}
          type="text"
          name="password"
          required
        />
        {userInput.password === "" ? <h4 style={{ color: "red" }}>No user input</h4> : <h4 style={{ color: "lightgreen"}}>{userInput.password}</h4>}

        <button style={{ display: "block" }}>Login</button>

      </form>
    </>
  )
}

export default LoginPage