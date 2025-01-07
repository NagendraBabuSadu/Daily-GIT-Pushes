import { useState } from 'react'

import './App.css'

function App() {

	const [num1, setNum1] = useState();
	const [num2, setNum2] = useState();
	const [result, setResult] = useState(0);
	const [symbol, setSymbol] = useState("");

	const handleAddition = () => {
		setResult(Number(num1) + Number(num2));
		setSymbol("+")
	}
	const handleSubtraction = () => {
		setResult(Number(num1) - Number(num2));
		setSymbol("-")
	}
	const handleMultiplication = () => {
		setResult(Number(num1) * Number(num2));
		setSymbol("*")
	}
	const handleDivision = () => {
		setResult(Number(num1) / Number(num2));
		setSymbol("/")
	}
	return (
		<div>
			<div>
				<h3 style={{color:"darkred"}}>Basic Calculator</h3>
			</div>
		<div style={{border: "2px solid grey", padding: "18px", borderRadius: "5px"}}>

			<input type="number" onChange={(e) => setNum1(e.target.value)} />
			<br />
				

			<p style={{position: "fixed", transform: "scale(1.7)"}}>{symbol}</p>
			

			<input type="number" onChange={(e) => setNum2(e.target.value)} />

			<br /><br />
			<div>

				<button onClick={handleAddition}>+</button>
				<span> </span>

				<button onClick={handleSubtraction}>-</button>
				<span> </span>

				<button onClick={handleMultiplication}>*</button>
				<span> </span>

				<button onClick={handleDivision}>/</button>
			</div>

			<h4>Result is <span style={{color: "darkviolet"}}> {result.toFixed(2)}</span></h4>


		</div>
		</div>
	)

}



export default App
