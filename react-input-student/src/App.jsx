import React, { useContext } from 'react'

import './App.css'

// Component Imports
import './components/UI/Card.css'
import InputStudent from './components/InputStudent'
import DisplayStudents from './components/DisplayStudents'
import AppContext from './context/AppContext'



function App() {
  
  const {filteredStudents} = useContext(AppContext);

  return (

    <>
      <InputStudent/>

      <DisplayStudents students={filteredStudents}/>
    </>

  )
}

export default App
