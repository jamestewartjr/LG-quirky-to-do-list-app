import { getData, saveData } from './db'
import allTodos from './list'

const reorder = todos =>
  todos.map( (todo, index) => Object.assign( {}, todo, { order: index }))

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