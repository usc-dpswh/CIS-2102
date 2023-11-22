import React, { useState, useEffect } from 'react'
import '../index.css';
import { UserFormFunctions } from '../../../react-router-practice/src/components/SecondReactivity/UserFormFunctions';

function UserForm() {

  // Abstracting our form validation logic/code
  const { input, isValid, inputHandler } = UserFormFunctions();

  return (
    <div className={`form__container ${isValid ? "" : "rainbow--background"}`}>

      <h3>Enter your username</h3>
      <input
        type='text'
        onChange={inputHandler}
        className={isValid ? '' : 'input--error'}
      ></input>
      <h4>{isValid ? input : "Invalid username!"}</h4>

    </div>
  )
}

export default UserForm