import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import AppContext from '../context/AppContext';
import AppContext from '../context/AppContext';

import './InputStudent.css'

const InputStudent = () => {

    const ctx = useContext(AppContext);

    const inputHandler = (event) => {
        console.log(event.target.value);
        ctx.setInputID(event.target.value);
    }

    return (
        <input onChange={inputHandler}
            type='text'
            placeholder='Enter student ID'
            className='input'
        />
    );
}

export default InputStudent;
