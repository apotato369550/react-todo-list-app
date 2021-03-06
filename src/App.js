import './App.css';
import React, { useState, useEffect } from 'react';
import Form from "./components/form";
import ToDoList from "./components/toDoList";

function App() {
  // continue here
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    console.log("hey");
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>React To-to List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}
        status={status}
      />
      <ToDoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos} 
      />
    </div>
  );
}
// push this code tomorrow

export default App;
