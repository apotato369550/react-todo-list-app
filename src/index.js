import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from "./components/form";
import ToDoList from "./components/toDoList";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Form />
    <ToDoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// import app css here

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
