import { getData, saveData } from './db'
import { todoSort } from '../app/orderButtons'
import allTodos from './list'

const reorder = todos =>
  todos.sort( todoSort )
    .map( (todo, index) => Object.assign( {}, todo, { order: todos.length - index }))

const deleteTodo = id => {
  const data = getData()
  const index = data.todos.findIndex( todo => todo.id === id )
  
  const todos = reorder([
    ...data.todos.slice( 0, index ),
    ...data.todos.slice( index + 1 )
  ])

  saveData( Object.assign( {}, data, { todos }))
}

export default deleteTodo