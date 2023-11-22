import React, { useState, useContext } from 'react'

import './App.css'
import Header from './components/Header';
import HomeLink from './components/HomeLink';
import AppContext from './context/AppContext';


function App() {
  
  const ctx = useContext(AppContext);
  console.log(ctx.isLoggedIn);

  return (
    <>
      <Header
        header="React Routivity"
      />

      <HomeLink isLoggedIn={ctx.isLoggedIn}/>

      <button
        onClick={() => ctx.setIsLoggedIn(!ctx.isLoggedIn)}
        className="button--link"
        style={{
          marginTop: '1.5rem'
        }}
      >
        {ctx.isLoggedIn === true ? "Logout" : "Sign in"}
      </button>
    </>
  )
}

export default App
