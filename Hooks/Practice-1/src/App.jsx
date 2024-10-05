import { useEffect, useState } from "react"
import { Todo } from "./components/Todo"
import { NextTodo } from "./components/NextTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then(async function (res) {
        const data = await res.json();
        const list = await data.todos;
        console.log(list);
        setTodos(list)
      })
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => {
          // Stop the interval if the index reaches the last todo
          if (prevIndex + 1 >= todos.length) {
            clearInterval(interval); // Clear the interval when reaching the last item
            return prevIndex;
          }
          return prevIndex + 1; // Move to the next item
        });
      }, 500);
    return () => clearInterval(interval);
    
  }, [todos.length]);


  return (
    <div>
      {/* <button onClick={() => setId(id + 1)}>Next</button>
      <NextTodo id={id} /> */}
      <Todo todos={todos} currentIndex={currentIndex} />
    </div>
  )
}

export default App
