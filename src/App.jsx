import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from './components/TodoList';
import UserForm  from './components/UserForm';

const KEY = 'todoApp.todos'

export function App(){
    const [todos, setTodos] = useState([
        {id: 1, task: "Tarea 1", completed: false}
    ])

    const todoTaskRef = useRef();
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos){
            setTodos(storedTodos)
        }
        
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos))
    }, [todos])

    const makeCallAPI = () =>{
        fetch('http://0.0.0.0:8000/app/v1/forms')
        .then( res => {
            var response = res.json();
            console.log(response)
            return response
        })
    }
    const toggleTodo = (id) =>{
        const newTodos = [...todos];
        const todo = newTodos.find( (todo)=> todo.id === id)
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };
    const handleClearAll = () =>{
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }
    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return;
        // Change state of the previous makinf a copy and modyinf the copy
        setTodos((prevTodos) => {
            return [...prevTodos    , {id: uuidv4(), task, completed: false}];
        });
        todoTaskRef.current.value = null;
    };
    return (
    <Fragment>

        {/* <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <input ref={todoTaskRef} type="text" placeholder="Nueva tarea"/>
        <button onClick={handleTodoAdd}> Add </button>
        <button onClick={handleClearAll}> Delete </button>
        <div>Te quedan {todos.filter((todo) => !todo.completed).length}</div>
        <div>
            <button onClick={makeCallAPI}> Make a call </button>
        </div> */}
        <div>
            <UserForm/>
        </div>
    </Fragment>
    );
}