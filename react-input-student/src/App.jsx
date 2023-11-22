import React, { useContext } from 'react'

import './App.css'

// Component Imports
import './components/UI/Card.css'
import InputStudent from './components/InputStudent'
import DisplayStudents from './components/DisplayStudents'
import AppContext from './context/AppContext'



function App() {
  
  const {filteredStudents} = useContext(AppContext);
  console.log(filteredStudents)

  return (

    <>
      <InputStudent/>

      <DisplayStudents students={filteredStudents}/>
    </>

  )
}

export default App
