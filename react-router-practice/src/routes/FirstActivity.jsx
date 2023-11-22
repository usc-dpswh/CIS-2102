import React, { useContext, useState } from 'react'

import '../App.css'

import '../components/FirstReactivity/UI/Card.css'
import InputStudent from '../components/FirstReactivity/InputStudent'
import DisplayStudents from '../components/FirstReactivity/DisplayStudents'
import AppContext from '../context/AppContext'
import Header from '../components/Header'



function FirstActivity({ isLoggedIn }) {

  const ctx = useContext(AppContext);

  if (ctx.isLoggedIn === true) {
    return (

      <>
        <Header
          header="First ReActivity"
        />

        <InputStudent />

        <DisplayStudents students={ctx.filteredStudents} />
      </>

    )
  } else {
    return (
      <h1>You are not logged in.</h1>
    )
  }


}

export default FirstActivity
