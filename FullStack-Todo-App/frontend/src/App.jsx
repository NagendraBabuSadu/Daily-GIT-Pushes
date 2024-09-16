import { useEffect, useState } from 'react'
import { CreateTodo } from './components/createTodo'
import { Todos } from './components/todos'


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function (res) {
        const data = await res.json();
        setTodos(data.todos)
      })
  }, [])

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  )
}

export default App
