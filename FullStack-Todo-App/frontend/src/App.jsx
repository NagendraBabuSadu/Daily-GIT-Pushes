import { useEffect, useState } from 'react'
import { CreateTodo } from './components/createTodo'
import { Todos } from './components/todos'


function App() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function (res) {
        const data = await res.json();
        setTodos(data.todos)
      })
  }, [])

  return (
    <div>
      <CreateTodo />
      <Todos id={id} setId={setId} todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
