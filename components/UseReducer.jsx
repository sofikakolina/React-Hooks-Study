'use client'
import { useState, useReducer } from "react"
import TodoCard from "./useReducer/TodoCard"

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  REMOVE_TODO: 'remove-todo'
}

function reducer(todos, action){
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return action.payload.name ? [...todos, newTodo(action.payload.name)] : [...todos]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id){
          return {...todo, complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.REMOVE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos;
  }
}

function newTodo(name){
  return{ id: Date.now(), name: name, complete: false}
}

const UseReducer = () => {

  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO, payload: {name:name}})
    setName('')
  }

  console.log(todos)
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <div className="flex flex-col gap-5">
        {
          todos.map(todo => <TodoCard todo={todo} key={todo.id} dispatch={dispatch}/>)
        }
      </div>
    </form>
  )
}

export default UseReducer