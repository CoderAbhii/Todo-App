import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
// import Footer from './components/Footer';
import React, { useState } from 'react'
import AddTodo from './components/AddTodo';

function App() {
  const onDelete = (todoDelete) => {
    setTodos(todos.filter((e)=>{
      return e!==todoDelete;
    }));
  }

  const addTodo = (title, desc) =>{
    const myTodo ={
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo])
  }

  const [todos, setTodos] = useState([]);
  return (
    <>
      <Navbar title="My Todos App" />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      {/* <Footer /> */}
    </>
  );
}

export default App;