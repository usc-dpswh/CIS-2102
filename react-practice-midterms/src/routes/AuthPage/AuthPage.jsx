import React, { useState, useContext } from 'react'
import axios from 'axios'

import './AuthPage.css'
import AppContext from '../../context/AppContext'
import Spinner from '../../components/Spinner/Spinner'
import '../../components/Spinner/Spinner.css'

const AuthPage = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const ctx = useContext(AppContext)

  const message =
    <h3 style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>No users yet</h3>

  const spinner = <Spinner />

  const url = "https://jsonplaceholder.typicode.com/users"
  const fetchHandler = async () => {
    setIsLoading(true)

    try {
      // we store the data we fetched using AXIOS into this 'res' variable

      const res = await axios.get(url)
      setIsLoading(false)
      if (res.status !== 200) {
        alert("Error fetching data")
      } else {
        setUsers(res.data)
      }
      console.log(res)
    } catch (err) {
      alert(err)
    }
    console.log(users)
  }

  return (
    <div>
      <h1>Hello {ctx.loggedUser}</h1>

      <button onClick={fetchHandler}>Fetch users</button>

      <div className="wrapper">

        <div className="table">

          <div className="row header">
            <div className="cell">
              ID
            </div>
            <div className="cell">
              Name
            </div>
            <div className="cell">
              Username
            </div>
            <div className="cell">
              Email
            </div>
          </div>


          {isLoading ? (
            <Spinner/>
          ) : (
            users.length === 0 ? message : users.map(user => (
              <div className="row">
                <div className="cell" data-title="ID">
                  {user.id}
                </div>
                <div className="cell" data-title="Name">
                  {user.name}
                </div>
                <div className="cell" data-title="Username">
                  {user.username}
                </div>
                <div className="cell" data-title="Email">
                  {user.email}
                </div>
              </div>
            ))
          )}

        </div>

      </div>
    </div>
  )
}

export default AuthPage