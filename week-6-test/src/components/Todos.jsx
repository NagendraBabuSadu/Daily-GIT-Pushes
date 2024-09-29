import React, { useState } from "react";

function Todos() {
    const [todos, setTodos] = useState([
        {
            id: 3,
            title: "title1",
            description: "desc1"
        },
        {
            id: 2,
            title: "title2",
            description: "desc2"
        },
        {
            id: 1,
            title: "title3",
            description: "desc3"
        }
    ])

    return (
        <div>
            <AddTodo todos={todos} setTodos={setTodos} />
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <StyleComponent >
                            <Todo title={todo.title} description={todo.description} />
                        </StyleComponent>
                    </div>
                )
            })}
        </div>
    )
}

const Todo = React.memo(function ({ title, description }) {
    return (
        <div style={{color: "black", padding: "10px"}}>
            <h2>{title}</h2>
            <h3>{description}</h3>
        </div>
    )
})

function StyleComponent({ children }) {
    return (
        <div style={
            { border: "2px solid green" , marginBottom: "2px"}
        }>
            {children}
        </div>
    )
}

function AddTodo({ todos, setTodos }) {
    const newTodo = {
        id: todos.length + 1,
        title: "todoNew",
        description: "descNew"
    }


    function addTodo() {
        setTodos([newTodo, ...todos]);
    }

    return (
        <div>
            <button type="button" style={{padding: "8px"}} onClick={addTodo} >Add Todo</button>
        </div>
    )
}


export default Todos;
