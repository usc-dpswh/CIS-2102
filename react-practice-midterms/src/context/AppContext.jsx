import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import users from '../PseudoDatabase'

const AppContext = React.createContext({
  "isLoggedIn": false,
  "setIsLoggedIn": () => {},
  "AuthenticateUser": () => {},
  "loggedUser": "",
  "setLoggedUser": () => {}
})

export const AppContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState("")

  const AuthenticateUser = (data) => {
    const username = data.target[0].value;
    const password = data.target[1].value;
    const userExists = users.some(user => user.username === username && user.password === password)

    if (userExists) {
      setIsLoggedIn(true)
      setLoggedUser(username)
    } else {
      alert("User does not exist!");
    }
  }

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        AuthenticateUser,
        loggedUser,
        setLoggedUser
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext