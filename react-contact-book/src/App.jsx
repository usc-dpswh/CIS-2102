import { useState, useRef } from 'react'
import './App.css'

function App() {

  // Managing the state of ALL our inputs from the Contact Form
  const [input, setInput] = useState({
    name: "",
    contact: "",
    id: "",
    course: "",
  })

  // Holds the contacts submitted from Contact Form (ARRAY)
  const [contactList, setContactList] = useState([]);

  const [isModalClicked, setIsModalClicked] = useState(false);

  const editModal = useRef();
  const deleteModal = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const newContact = {
      name: input.name,
      contact: input.contact,
      id: input.id,
      course: input.course,
    };

    setContactList(prev => [...prev, newContact])

    // Clear the input fields after submission
    setInput({
      name: "",
      contact: "",
      id: "",
      course: "",
    });

    console.log(contactList);
  }

  const handleChange = (event) => {
    setInput(prev => ({ ...prev, [event.target.name]: event.target.value }))
    console.log(input);
  }

  const editHandler = (index) => {
    // Access the <dialog> element using the ref
    const editDialog = editModal.current;
    
    // Open the modal
    editDialog.open = true;
  
    console.log(isModalClicked);
  }
  

  const deleteHandler = (index) => {
    setIsModalClicked(!isModalClicked);
    console.log(isModalClicked);
  }

  return (
    <>
      {/* Main Contact Form */}
      <div style={{ backgroundColor: '#505050', height: 'auto', width: '300px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>

          <h1 style={{ margin: '0 auto 0 auto' }}>Contact Book</h1>

          <form onSubmit={submitHandler}>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '5px' }}>Name</h3>
              <input onChange={handleChange} name="name" type="text" placeholder='Enter name'></input>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '5px' }}>Contact number</h3>
              <input onChange={handleChange} name="contact" type="text" placeholder='Enter contact number'></input>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '5px' }}>ID</h3>
              <input onChange={handleChange} name="id" type="text" placeholder='Enter ID'></input>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '5px' }}>Course</h3>
              <input onChange={handleChange} name="course" type="text" placeholder='Enter course'></input>
            </div>

            <button style={{ width: '100%', marginTop: '3rem' }}>Add Contact</button>

          </form>
        </div>
      </div>

      <div
        style={{
          marginTop: '2rem',
          margin: '0 auto 0 auto'
        }}
      >
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact number</th>
              <th>ID</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactList.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>No contacts added.</td>
              </tr>
            ) : (
              contactList.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.contact}</td>
                  <td>{item.id}</td>
                  <td>{item.course}</td>
                  <td>
                    <button
                      
                      onClick={() => editHandler(index)}
                    >Edit</button>
                    <button onClick={() => deleteHandler(index)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

      <dialog ref={editModal}>
        <div style={{ backgroundColor: '#505050', height: 'auto', width: '300px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>

            <h1 style={{ margin: '0 auto 0 auto' }}>Edit Contact</h1>

            <form onSubmit={submitHandler}>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ marginBottom: '5px' }}>Name</h3>
                <input onChange={handleChange} name="name" type="text" placeholder='Enter name'></input>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ marginBottom: '5px' }}>Contact number</h3>
                <input onChange={handleChange} name="contact" type="text" placeholder='Enter contact number'></input>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ marginBottom: '5px' }}>ID</h3>
                <input onChange={handleChange} name="id" type="text" placeholder='Enter ID'></input>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ marginBottom: '5px' }}>Course</h3>
                <input onChange={handleChange} name="course" type="text" placeholder='Enter course'></input>
              </div>

              <button style={{ width: '100%', marginTop: '3rem' }}>Update Contact</button>
              <button style={{ width: '100%', marginTop: '1rem' }} onClick={() => editModal.current.close()}>Close</button>

            </form>
          </div>
        </div>
      </dialog>

    </>
  )
}

export default App
