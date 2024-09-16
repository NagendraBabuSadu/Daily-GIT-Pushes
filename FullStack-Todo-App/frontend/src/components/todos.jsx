export function Todos({ todos }) {
    return (

        <div>
            {todos.map(function (todo) {
                return (
                    <div>
                        <h3>{todo.title}</h3>
                        <h3>{todo.description}</h3>
                        <button>{todo.completed == false ? "Completed" : "Mark as Done"}</button>
                    </div>
                )
            })}
        </div>
    )
}