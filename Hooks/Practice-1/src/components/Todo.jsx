
export function Todo({ todos }) {

    return (
      <div>
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <h4>{item.id} <span></span>{item.todo} </h4>
            </div>
          )
        })}
      </div>
  
    )
  }
  
