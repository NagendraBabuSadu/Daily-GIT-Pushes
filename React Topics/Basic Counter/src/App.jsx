import { React, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button count={count} setCount={setCount}></Button>
    </div>
  )
}


function Button(props) {
  return (
    <button onClick={() => props.setCount(props.count + 1)}>
      Counter {props.count}
    </button>
  )
}


export default App
