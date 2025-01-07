import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <div style={{display: "flex", justifyContent:"space-between"}}>
          <div style={{backgroundColor: "red"}}>Hi</div>
          <div style={{backgroundColor: "green"}}>Hi</div>
          <div style={{backgroundColor: "yellow"}}>Hi</div>
      </div>
      
    </div>
  )
}

export default App
