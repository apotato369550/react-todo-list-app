import './App.css';
import React, { useState } from 'react';
import Form from "./components/form";
import ToDoList from "./components/toDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>React To-to List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <ToDoList todos={todos} />
    </div>
  );
}
// push this code tomorrow

export default App;
