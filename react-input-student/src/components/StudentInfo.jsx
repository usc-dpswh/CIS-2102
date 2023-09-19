import React from 'react';
import './StudentInfo.css';

const StudentInfo = ({ id, name, age, course }) => {
    return (
        <div>
          <h1>{id}</h1>
          <h2>{name}</h2>
          <h2>{age}</h2>
          <h1>{course}</h1>
        </div>
    )
}

export default StudentInfo;
