import React from 'react';
import Todo from './todo';

const ToDoList = ({todos}) => {
    // make custom todos
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo text={todo.text}/>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
