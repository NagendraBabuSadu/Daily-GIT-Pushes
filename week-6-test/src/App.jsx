import { useState } from "react"
import Todos from "./components/Todos";



function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");



  return (
    <div>
      <Todos title={title} description = {description}  />
    </div>
  )
}





export default App
