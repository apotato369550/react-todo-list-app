import React from 'react';
import Todo from './todo';

const ToDoList = () => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                <Todo />
            </ul>
        </div>
    );
}

export default ToDoList;
