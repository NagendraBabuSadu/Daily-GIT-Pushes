import { useState } from "react"

export function Todos({ id, todos, setTodos }) {



    function toggleTodo(todo) {
        setTodos(todos => todos.map((todoItem) => todoItem._id === todo._id ? { ...todoItem, completed: !todoItem.completed } : todoItem));

    }



    return (
        <div style={{
            overflowY: "auto"
        }}>
            {todos && todos.length > 0 ? (
                todos.map(function (todo, index) {    
                    return (
                        <div style={{
                            display: "flex"
                        }} key={todo._id}>
                            <h3 style={{margin: "2px"}}>{id + index}</h3> 
                            <h3 style={{margin: "2px"}}>{todo.title}</h3>
                            <h3 style={{margin: "2px"}}>{todo.description}</h3>
                            <button style={{margin: "2px"}} id={todo._id + index} key={todo._id} onClick={() => toggleTodo(todo)}>{todo.completed === false ? "Mark as Done" : "Completed"}</button>
                        </div>
                    )
                }
                )) : (
                <p>No Todos</p>
            )}
        </div>
    )
}