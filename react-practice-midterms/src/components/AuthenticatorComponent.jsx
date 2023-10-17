import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import AuthPage from '../routes/AuthPage/AuthPage'


const AuthenticatorComponent = (props) => {
  const ctx = useContext(AppContext)

  return (ctx.isLoggedIn ? <AuthPage/> : "You are not authenticated.")
}

export default AuthenticatorComponent