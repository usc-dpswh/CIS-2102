import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [inputID, setInputID] = useState("")


  useEffect(() => {
    const fetchData = async () => {
      if (inputID === null){
        try {
          const response = await axios.get('http://localhost:3000/api/users');
          setUsers(response.data);
        } catch (error) {
          console.error('Error fetching users:', error.message);
        }
      }

      try {
        // Make a request to the API endpoint with the input ID
        const response = await axios.get(`http://localhost:3000/api/users/${inputID}`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    // Check if inputID is not empty before making the request
    if (inputID.trim() !== "") {
      fetchData();
    }
  }, [inputID]);

  const searchInputHandler = (event) => {
    setInputID(event.target.value)
  }

  const clickHandler = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  return (
    <>
      <h1>Greetings! You haven't fetched any users yet.</h1>

      <div className='flex flex-col'>
        <button onClick={clickHandler} className='text-2xl w-6/12 mx-auto'>
          Fetch users
        </button>

        <input className='text-3xl text-black p-2' type="text" onChange={searchInputHandler} value={inputID} />
      </div>
      <h1 className='text-3xl'>{inputID}</h1>

      {users.length === 0 ? (
        "NO DATA FETCHED"
      ) : (
        users.map((user, index) => (
          <div className='p-3 bg-slate-700 w-50 my-5 text-xl' key={index}>
            <div className='flex'>
              <div className='flex items-center'>
                <h3 className='w-min text-left font-bold'>ID:</h3>
                <h3 className='ml-16'>{user.id}</h3>
              </div>
            </div>
            <div className='flex'>
              <div className='flex items-center'>
                <h3 className='w-min text-left font-bold'>NAME:</h3>
                <h3 className='ml-5'>{user.name}</h3>
              </div>
            </div>
            <div className='flex items-center w-min'>
              <h3 className='text-left font-bold'>AGE:</h3>
              <h3 className='ml-10'>{user.age}</h3>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default App;