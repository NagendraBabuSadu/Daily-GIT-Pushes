import { useEffect, useState } from "react";

function App() {
  const { todos, error, loading } = useTodos();

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div>
        Error: {error.message}
      </div>
    )
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h2>{todo.todo}</h2>
          </div>
        );
      })}
    </div>
  );
}

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://dummyjson.com/todos");
        setTimeout(async () => {
          
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }    
          const data = await response.json();
          console.log(data);
          setTodos(data.todos);
        }, 2000);
          
        } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);
  
    return { todos, error, loading }; // important to return the value
  }

export default App;
