// state, components

import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count + 1} setCount={setCount}></CustomButton>
      <CustomButton count={count - 1} setCount={setCount}></CustomButton> // this doesn't work, as it is always behind the original count value
    </div>
  )
}

function CustomButton(props) {

  function onClickHandler() {
    console.log(props.count)
    props.setCount(props.count + 1)
  }
  return (
    <button onClick={onClickHandler}>Count {props.count}</button>
  )
}



export default App
