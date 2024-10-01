import { useEffect, useState } from "react"
import { Todo } from "./components/Todo"
import { NextTodo } from "./components/NextTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then(async function (res) {
        const data = await res.json();
        setTodos(data.todos)
      })
  }, [])


  return (
    <div>
      <button onClick={() => setId(id + 1)}>Next</button>
      <NextTodo id={id} />
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
