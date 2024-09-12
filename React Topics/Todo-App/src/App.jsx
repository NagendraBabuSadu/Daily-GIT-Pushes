import { useState } from 'react';


function App() {
	const [newTodoTitle, setNewTodoTitle] = useState("");
	const [newTodoDescription, setNewTodoDescription] = useState("");

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


			<button onClick={addTodo}>Add Todo</button>
			{todos.map((todo) => {
				return (
					<Todo
						key={todo.id} id={todo.id} title={todo.title} description={todo.description} updateTodo={updateTodo}
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
		setTitle(e.target.value);
	}

	function descriptionMouseOver(e) {
		setIsEditingTitle(false);
		setIsEditingDescription(true);
		setDescription(e.target.value);
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
					<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
					<Button onClick={saveTodo} label="Save" />
				</div>
			) : (
				<h3 onClick={titleMouseOver}>{props.title}</h3>
			)}
			{isEditingDescription ? (
				<div>
					<input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
					<Button onClick={saveTodo} label="Save" />
				</div>
			) : (
				<h3 onClick={descriptionMouseOver}>{props.description}</h3>
			)}


		</div>
	)

}

export default App



