import { useEffect, useState } from "react"

export function NextTodo({ id }) {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?id=" + id) 
        .then(async function (res) {
            const data = await res.json();
            setTodo(data)
        }) 
    }, [id])

    return (
        <div>
            {todo.map((item) => 
            {
                console.log(item)
                return(
                    <div key={item.id}>
                        <h4>{item.id} <span></span>{item.title}</h4>
                    </div>
                )
            } )}
        </div>
    )
}