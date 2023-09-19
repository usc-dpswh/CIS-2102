import { useState, useEffect, useContext } from 'react'

import './App.css'

// Component Imports
import Card from './components/UI/Card'
import './components/UI/Card.css'
import CardContainer from './components/UI/CardContainer'
import StudentInfo from './components/StudentInfo'
import InputStudent from './components/InputStudent'
import AppContext from './context/AppContext'
import DisplayStudents from './components/DisplayStudents'

// Data
const students = [
  {
    'id': 22103514,
    'name': 'Lanutan, Achille',
    'age': 20,
    'course': 'BSIT-2'
  },
  {
    'id': 19023347,
    'name': 'Juab, Carlo',
    'age': 21,
    'course': 'BSIT-2'
  },
  {
    'id': 22102141,
    'name': 'Palabrica, Sarah',
    'age': 22,
    'course': 'BSCS-1'
  },
  {
    'id': 22102588,
    'name': 'Labide, Xander',
    'age': 23,
    'course': 'BSIT-3'
  },
  {
    'id': 15025688,
    'name': 'Tedd Bundy',
    'age': 24,
    'course': 'BSSK-4'
  },
];

function App() {
  // const ctx = useContext(AppContext);
  const [inputID, setInputID] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);

  const filterByID = () => {
    const filtered = students.filter((student) =>
      student.id.toString().startsWith(inputID)
    );
    setFilteredStudents(filtered);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      filterByID();
    }, 300);

    console.log(inputID);

    return () => {
      clearTimeout(timer);
    }

  }, [inputID]);

  return (

    <AppContext.Provider
      value={{
        inputID,
        setInputID,
        filterByID,
        filteredStudents
      }}
    >

      <InputStudent/>

      <DisplayStudents students={filteredStudents}/>

    </AppContext.Provider>


  )
}

export default App
