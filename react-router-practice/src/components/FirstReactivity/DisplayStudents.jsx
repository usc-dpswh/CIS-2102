import React from 'react'
import Card from './UI/Card'
import CardContainer from './UI/CardContainer'
import StudentInfo from './StudentInfo'

import './UI/Card.css'
import './InputStudent.css'
import './StudentInfo.css'

function DisplayStudents({students}) {

  console.log(students);

  const errorMessage =
    <h1>No student with that ID!</h1>

  return (
    <CardContainer>
      {students.length === 0 ? errorMessage : students.map(student => (
        <Card className="card" key={student.id}>
          <StudentInfo
            key={student.id}
            id={student.id}
            name={student.name}
            age={student.age}
            course={student.course}
          />
        </Card>
      ))}
    </CardContainer>
  )
}

export default DisplayStudents