import React, { useState, useRef, useContext, useEffect, createContext } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import ContactTable from './components/ContactTable/ContactTable';
import UpdateForm from './components/UpdateForm/UpdateForm';
import AppContext from './context/AppContext';
import Spinner from './components/Spinner/Spinner';
import Header from '../../react-api-consume/src/components/Header';

function App() {

  const ctx = useContext(AppContext)
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/db')
      .then((response) => response.json())
      .then((json) => {
        ctx.setContactList(json.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setDataLoaded(true))
  }, []);

  return (
    <>

      <Header header="Sixth ReActivity"/>

      <ContactForm/>

      {dataLoaded ? <ContactTable/> : <Spinner/>}

      <UpdateForm/>

    </>
  )
}

export default App
