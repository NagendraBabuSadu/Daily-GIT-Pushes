import { useState } from "react";

export function SearchTodo({ todos, setTodos, searchQuery, setSearchQuery }) {

    function searchingTodo(e) {
        const value = e.target.value;
        setSearchQuery(value); // Update the search query state

    }

    const filteredTodos = todos.filter((todo) => {
        return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div>

            <label htmlFor="">Search: </label>
            <input style={{
                height: "35px",
                width: "200px"
            }} type="text" placeholder="Enter" onChange={searchingTodo} value={searchQuery} />

            {searchQuery && (

                <ul>
                    {filteredTodos.length > 0 ? (
                        filteredTodos.map((todo, index) => {
                            return (
                                <div>
                                <h3  key={index} style={{margin: "2px"}}>{todo.id}</h3>
                                <h3  style={{margin: "2px"}}>{todo.title}</h3>
                                <h3 style={{margin: "2px"}}>{todo.description}</h3>
                                </div>
                            )
                        })

                    ) : (
                        <p>No Data</p>
                    )}

                </ul>
            )}

        </div>
    )

}