
export function Todo({ todos, currentIndex }) {


  if (todos.length === 0) {
    return (
      <div>Loading....</div>
    )
  }

  const todoItem = todos[currentIndex];
  console.log(todoItem)
  // Condition: If todos.length > 30 or if todoItem is undefined
  if (todos.length > 30 || !todoItem?.id) {
    return (
      <div>Todo List is done</div>
    );
  }
  


  return (
    <div >
      <h4>{todoItem.id} <span></span> {todoItem.todo}</h4>
    </div>

  )
}

