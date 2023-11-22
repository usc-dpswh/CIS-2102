// AUTHOR   :   Lanutan, Achille - 22103514
// DATE     :   09/20/2023 - 2:05
// DESC     :   ReActivity #3, useEffect Form Validation

import React from 'react'

import '../App.css'

import Header from '../components/Header'
import UserForm from '../../../react-form-validation/src/components/UserForm'
import AppContext from '../context/AppContext'
import { useContext } from 'react'

function SecondActivity() {

  const ctx = useContext(AppContext);

  if (ctx.isLoggedIn === true) {
    return (
      <>
        <Header
          header="Second ReActivity"
        />
        <UserForm />
      </>
    )
  } else {
    return (
      <h1>You are not logged in.</h1>
    )
  }


}

export default SecondActivity
