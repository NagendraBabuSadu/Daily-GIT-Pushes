import { useState } from "react";

export function CreateTodo() {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input style={{ padding: 5, margin: 10 }} type="text" placeholder="title" onChange={(e) => {
                setTitle(e.target.value)
            }} /> <br />
            <input style={{ padding: 5, margin: 10 }} type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)} />  <br />

            <button style={{ margin: 10 }} onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }), 
                    headers: {
                        "Content-Type" : "application/json"
                    }
                })
                    .then(async function (res) {
                        const data = await res.json();
                        console.log(data)
                    })
            }}>Add Todo</button>
        </div>
    )
}


