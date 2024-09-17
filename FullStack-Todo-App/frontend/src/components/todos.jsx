import { useState } from "react"

export function Todos({ id, todos, setTodos }) {


    function toggleTodo(todo) {
        const updatedTodos = todos.map((todoItem) => todoItem.id === todo.id ? { ...todoItem, completed: !todoItem.completed } : todoItem)

        setTodos(updatedTodos);  
    }

    return (
        <div>
            {todos && todos.length > 0 ? (
                todos.map(function (todo, index) {
                    console.log(todo) // <-- DO THIS    
                    return (
                        <div key={todo.id}>
                            <h3>{id + index}</h3>
                            <h3>{todo.title}</h3>
                            <h3>{todo.description}</h3>
                            <button id={id + index} key={todo.id} onClick={() => toggleTodo(todo)}>{todo.completed === false ? "Mark as Done" : "Completed"}</button>
                        </div>
                    )
                }
                )) : (
                <p>No Todos</p>
            )}
        </div>
    )
}