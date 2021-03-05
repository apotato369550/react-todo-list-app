import React from 'react';
import Todo from './todo';

const ToDoList = ({todos, setTodos}) => {
    // make custom todos
    
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo text={todo.text} id={todo.id} setTodos={setTodos} todos={todos} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
