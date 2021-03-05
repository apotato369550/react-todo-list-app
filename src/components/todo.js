import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    const handleDelete = () => {
        setTodos(todos.filter(
            (element) => element.id !== todo.id
        ));
    }

    const handleComplete = () => {
        setTodos(todos.map((element) => {
            if(element.id === todo.id){
                console.log(element.id + " " + element.completed);
                return {
                    ...element, completed: !element.completed
                }
            }
            return element;
        }));
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{ text }</li>
            <button onClick={handleComplete} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={handleDelete} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;