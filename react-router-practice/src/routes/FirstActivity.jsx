import React, { useContext } from 'react'

import '../App.css'

import '../components/FirstReactivity/UI/Card.css'
import InputStudent from '../components/FirstReactivity/InputStudent'
import DisplayStudents from '../components/FirstReactivity/DisplayStudents'
import AppContext from '../context/AppContext'
import Header from '../components/Header'



function FirstActivity() {
  
  const {filteredStudents} = useContext(AppContext);

  return (

    <>
      <Header
        header="First ReActivity" 
      />
      <InputStudent/>

      <DisplayStudents students={filteredStudents}/>
    </>

  )
}

export default FirstActivity
