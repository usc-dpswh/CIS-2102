import React, { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'



const ContactForm = () => {

  const ctx = useContext(AppContext)

  return (
    <div style={{ backgroundColor: '#505050', height: 'auto', width: '300px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>

        <h1 style={{ margin: '0 auto 0 auto' }}>Contact Book</h1>

        <form id="main_form" onSubmit={ctx.submitHandler}>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginBottom: '5px' }}>Name</h3>
            <input onChange={ctx.handleChange} name="name" type="text" placeholder='Enter name'></input>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginBottom: '5px' }}>Age</h3>
            <input onChange={ctx.handleChange} name="contact" type="text" placeholder='Enter age'></input>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginBottom: '5px' }}>ID</h3>
            <input onChange={ctx.handleChange} name="id" type="text" placeholder='Enter ID'></input>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginBottom: '5px' }}>Course</h3>
            <input onChange={ctx.handleChange} name="course" type="text" placeholder='Enter course'></input>
          </div>

          <button style={{ width: '100%', marginTop: '3rem' }}>Add Contact</button>

        </form>
      </div>
    </div>
  )
}

export default ContactForm