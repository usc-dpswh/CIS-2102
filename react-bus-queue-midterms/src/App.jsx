import React from 'react'
import './App.css'

// My imports
import Sales from './components/Sales/Sales'
import Passengers from './components/Passengers/Passengers'
import Container from './components/UI/Container'
import Bus1 from './components/Buses/Bus1'
import Bus2 from './components/Buses/Bus2'
import Bus3 from './components/Buses/Bus3'

function App() {

  return (
    <>
      <Sales/>
      <Passengers/>

      <Container>
        <Bus1/>
        <Bus2/>
        <Bus3/>
      </Container>
      
    </>
  )

}

export default App
