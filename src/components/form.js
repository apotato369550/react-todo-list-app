import React from 'react'

const Form = ({ inputText, setInputText, todos, setTodos, status, setStatus }) => {
    const inputTextHandler = (e) => {
        console.log(e);
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
        // test this shiz
    }
    const statusHandler = (e) => {
        // this works:DDD
        console.log(e.target.value);
        setStatus(e.target.value);
    }
    return (
        <form>
            <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText} />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select" onChange={statusHandler}>
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
}

export default Form;