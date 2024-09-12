import { useState } from 'react';


function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: "Task 1",
			description: "Desc 1"
		}, {
			id: 2,
			title: "Task 2",
			description: "Desc 2"
		}
	])

	const [newTodoTitle, setNewTodoTitle] = useState("");
	const [newTodoDescription, setNewTodoDescription] = useState("");

	function addTodo() {
		let newtodo = {
			id: todos.length + 1,
			title: newTodoTitle,
			description: newTodoDescription
		}
		setTodos([newtodo, ...todos])

		setNewTodoTitle("");
		setNewTodoDescription("");

	}

	function updateTodo(id, updatedTodo) {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...updatedTodo }
			}
			return todo;
		});
		setTodos(updatedTodos);
	}

	function deleteTodo(id) {
		const updatedTodos = todos.filter((todo) => todo.id !== id) 
		setTodos(updatedTodos);
	}



	return (
		<div>
			{/* Add Todo Inputs */}
			<label>
				Title:
				<input
					type="text"
					placeholder="Enter title"
					value={newTodoTitle}
					onChange={(e) => setNewTodoTitle(e.target.value)}
				/>
				<br /> <br />
			</label>
			<label htmlFor="">
				Description:
				<input
					type="text"
					placeholder="Enter description"
					value={newTodoDescription}// Controlled input for description
					onChange={(e) => setNewTodoDescription(e.target.value)}
				/>
			</label>

			<span> </span>
			<button onClick={addTodo}>Add Todo</button>
			{todos.map((todo) => {
				return (
					<Todo
						key={todo.id} id={todo.id} title={todo.title} description={todo.description} updateTodo={updateTodo} deleteTodo={deleteTodo}
					/> 
				)
			})}
		</div>
	)
}

function Todo(props) {
	const [isEditingTitle, setIsEditingTitle] = useState(false);
	const [isEditingDescription, setIsEditingDescription] = useState(false);
	const [title, setTitle] = useState(props.title);
	const [description, setDescription] = useState(props.description);

	function titleMouseOver(e) {
		setIsEditingTitle(true);
		setIsEditingDescription(false);
		setTitle(title);
	}

	function descriptionMouseOver(e) {
		setIsEditingTitle(false);
		setIsEditingDescription(true);
		setDescription(description);
	}


	function saveTodo() {
		setIsEditingTitle(false);
		setIsEditingDescription(false);
		props.updateTodo(props.id, {
			id: props.id,
			title,
			description
		})
	}

	

	function Button({ onClick, label }) {
		return (
			<button onClick={onClick}>{label}</button>
		)
	}



	return (
		<div>
			{isEditingTitle ? (
				<div>
					<input type="text" value={title}
						onChange={(e) => {
							setTitle(e.target.value)
						}} />
					<Button onClick={saveTodo} label="Save" />
					<br />
				</div>
			) : (
				<div>
					<h4 onClick={titleMouseOver}>Title: {props.title}</h4>
				</div>
			)}
			{isEditingDescription ? (
				<div>
					<input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
					<Button onClick={saveTodo} label="Save" />
				</div>
			) : (
				<div>
					<h4 onClick={descriptionMouseOver}>Description: {props.description}</h4>
				</div>
			)}
			<span></span>
			<Button onClick={() => props.deleteTodo(props.id)} label="Delete" />

		</div>
	)

}

export default App



