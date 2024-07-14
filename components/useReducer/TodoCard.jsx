import {ACTIONS} from '@/components/UseReducer'
const TodoCard = ({todo, dispatch}) => {
  return (
    <div className='h-full flex gap-3'>
        <span className={`${todo.complete ? "bg-green-400" : "bg-red-600"} px-5 py-1 rounded-3xl`}>{todo.name}</span>
        <button className='bg-gray-50 px-5 py-1 border border-gray-500' onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id:todo.id}})}>toggle</button>
        <button className='bg-gray-50 px-5 py-1 border border-gray-500' onClick={() => dispatch({ type: ACTIONS.REMOVE_TODO, payload: {id:todo.id}})}>delete</button>
    </div>
  )
}

export default TodoCard