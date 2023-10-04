import React, { useState, useRef, useEffect } from 'react'

const AppContext = React.createContext({
  "handleChange": () => { },
  "submitHandler": () => { },
  "editHandler": () => { },
  "deleteHandler": () => { },
  "contactList": [],
  "editModal": null,
  "isSubmitted": false,
  "setIsSubmitted": () => { },
  "updateHandler": () => { },
  "contactList": [],
  "setContactList": () => { },
  "dataLoaded": false
})

export const AppContextProvider = (props) => {
  // Managing the state of ALL our inputs from the Contact Form
  const [input, setInput] = useState({
    name: "",
    contact: "",
    id: "",
    course: "",
  })

  // Holds the contacts submitted from Contact Form (ARRAY)
  const [contactList, setContactList] = useState([]);

  const [editIndex, setEditIndex] = useState(-1);

  const [isSubmitted, setIsSubmitted] = useState(false)

  const editModal = useRef(null);

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/db')
      .then((response) => response.json())
      .then((json) => {
        setContactList(json.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setDataLoaded(true))
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    setIsSubmitted(true)

    const newContact = {
      name: input.name,
      age: input.contact,
      id: input.id,
      course: input.course,
    };

    setContactList(prev => [...prev, newContact])

    document.getElementById("main_form").reset();

    console.log(isSubmitted);
    console.log(contactList);
  }

  const handleChange = (event) => {
    // console.log(event)
    setInput(prev => ({ ...prev, [event.target.name]: event.target.value }))
    console.log(input);
  }

  const editHandler = (index) => {
  // Access the <dialog> element using the ref from context
  const editDialog = editModal.current;

  setEditIndex(index);

  // Open the modal
  editDialog.showModal();

  console.log(index);
};

  const updateHandler = (event) => {
    event.preventDefault();

    const updated = [...contactList];

    updated[editIndex] = {
      name: input.name,
      age: input.contact,
      id: input.id,
      course: input.course,
    };

    setContactList(updated);

    // Close the modal
    editModal.current.close();

    document.getElementById("update_form").reset();

    // Reset the input values
    // setInput({
    //   name: "",
    //   contact: "",
    //   id: "",
    //   course: "",
    // });
    
  }


  const deleteHandler = (index) => {
    // Use filter to create a new array without the item at the specified index
    const updatedContactList = contactList.filter((item, idx) => idx !== index);

    // Update the contactList state with the modified array
    setContactList(updatedContactList);
  }

  return (
    <AppContext.Provider
      value={{
        handleChange,
        submitHandler,
        contactList,
        editHandler,
        deleteHandler,
        handleChange,
        updateHandler,
        editModal,
        contactList,
        setContactList,
        dataLoaded
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext