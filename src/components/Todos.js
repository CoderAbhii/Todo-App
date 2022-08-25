import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    return (
        <div className="container">
            <h1 className="my-3">Todos List</h1>
            {props.todos.length === 0 ? <h1>Nothing To Show Please Add Some Todos.!!</h1> :
                props.todos.map((todo) => {
                    return (
                        <>
                            <TodoItem todo={todo} key={todo.title} onDelete={props.onDelete} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Todos
