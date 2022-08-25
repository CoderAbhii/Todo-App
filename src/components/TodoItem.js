import React from 'react'

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="container my-4">
      <div className="card" style={{width: "30rem"}}>
        <h5 className="card-header bg-dark text-light">{todo.title}</h5>
        <div className="card-body">
          <p className="card-text">{todo.desc}</p>
          <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
