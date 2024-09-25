import { useEffect, useState } from 'react'
import { CreateTodo } from './components/createTodo'
import { Todos } from './components/todos'
import './app.css'
import { SearchTodo } from './components/SearchTodo';


function App() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

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
      <SearchTodo todos={todos} setTodos={setTodos} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {!searchQuery && (
        <Todos id={id} setId={setId} todos={todos} setTodos={setTodos}/>
      )}
    </div>
  )
}

export default App
