import React, { useContext } from 'react'

import '../App.css'

// Component Imports
// import './components/UI/Card.css'
// import InputStudent from '..FirstReactivity/components/InputStudent'
// import DisplayStudents from './components/DisplayStudents'
// import AppContext from './context/AppContext'

import '../components/FirstReactivity/UI/Card.css'
import InputStudent from '../components/FirstReactivity/InputStudent'
import DisplayStudents from '../components/FirstReactivity/DisplayStudents'
import AppContext from '../context/AppContext'



function FirstActivity() {
  
  const {filteredStudents} = useContext(AppContext);

  return (

    <>
      <InputStudent/>

      <DisplayStudents students={filteredStudents}/>
    </>

  )
}

export default FirstActivity
