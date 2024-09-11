import { useState } from 'react'



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

	function addTodo() {
		let newtodo = {
			id: todos.length + 1,
			title: "New Title",
			description: "New Desc"
		}
		setTodos([newtodo, ...todos])
	}

	function updateTodo(id, updatedTodo) {
		const updatedTodos = todos.map((todo) => {

			if(todo.id === id) {
				return {...todo, ...updatedTodo}
			}
			return todo;
		});
		setTodos(updatedTodos);
	}

	return (
		<div>
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
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState(props.title);
	const [description, setDescription] = useState(props.description);


	function handleSave() {
		setIsEditing(false);
		props.updateTodo(props.id, { id: props.id, title,  description });
	}


	function editTodo() {
		setIsEditing(true);
	}

	return (
		<div>
			{isEditing ? (
				<div>
					<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
					<input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
					<button onClick={handleSave}>Save</button>
				</div>
			) : (
				<div>
					<h3>{props.title}</h3> 	
					<h3>{props.description}</h3> 	
					<button onClick={editTodo}>Edit</button>
				</div>
			)}
		</div>
	)

}

export default App
