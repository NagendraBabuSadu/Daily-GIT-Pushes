import { useState } from 'react'

import './App.css'

function App() {

	const [num1, setNum1] = useState();
	const [num2, setNum2] = useState();
	const [result, setResult] = useState(0);

	const handleAddition = () => {
		setResult(Number(num1) + Number(num2));
	}
	const handleSubtraction = () => {
		setResult(Number(num1) - Number(num2));
	}
	const handleMultiplication = () => {
		setResult(Number(num1) * Number(num2));
	}
	const handleDivision = () => {
		setResult(Number(num1) / Number(num2));
	}
	return (
		<div>

			<input type="number" onChange={(e) => setNum1(e.target.value)} />
			<br /><br />
			<input type="number" onChange={(e) => setNum2(e.target.value)} />

			<br /><br />
			<div>

				<button onClick={handleAddition}>+</button>
				<span> </span>

				<button onClick={handleSubtraction}>-</button>
				<span> </span>

				<button onClick={handleMultiplication}>*</button>
				<span> </span>

				<button onClick={handleDivision}>*</button>
			</div>

			<h4>Result is {result}</h4>


		</div>
	)

}



export default App
