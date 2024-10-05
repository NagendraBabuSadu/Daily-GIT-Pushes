import { useState, useEffect } from "react";


function App() {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    getTodos();

  }, []);
  const getTodos = async () => {
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();
    const result = await data.todos;
    setTodos(result);

  }

  return (
    <div key={todos.id}>
      <h1>Todos</h1>
      {todos.map((todo) => {
        console.log(todo)
        return ( // 1 no return statement first time here
          <Todo
            key={todo.id}
            title={todo.todo}
          />
        )
      })}
    </div>
  )


}

function Todo({ title }) {
  return (
    <div >
      <h2>{title}</h2>
    </div>
  )
}



export default App;