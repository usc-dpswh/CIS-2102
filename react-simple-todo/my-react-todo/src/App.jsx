import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import DisplayTodo from './components/DisplayTodo';

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const inputHandler = (event) => {
    setInput(event.target.value)
    console.log(input);
  }

  const clickHandler = (event) => {
    const newTodo = [...todo, input];

    setTodo(newTodo);
    setInput("");
    console.log(todo);
  }

  const deleteHandler = (deleteThis) => {

    const updated = todo.filter((item, index) => index !== deleteThis);

    setTodo(updated);
    console.log(updated);
  }

  return (
    <>
      <h1
        style={{
          color: 'white'
        }}
      >ToDo App</h1>
      <input
        style={{
          fontSize: '2rem'
        }}
        onChange={inputHandler}
      ></input>
      <button
        onClick={clickHandler}
        style={{
          fontSize: '1rem',
          color: 'white'
        }}
      >Add</button>

      <DisplayTodo data={todo} delete={deleteHandler}/>

    </>
  )
}

export default App
