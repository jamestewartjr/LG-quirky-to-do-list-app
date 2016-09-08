import { getData, saveData } from './db'
import allTodos from './list'

const deleteTodo = id => {
  const data = getData()
  const index = data.todos.findIndex( todo => todo.id === id )

  saveData( Object.assign( {}, data, 
    { todos: 
      [
        ...data.todos.slice( 0, index ),
        ...data.todos.slice( index + 1 )
      ]
    })
  )

}

export default deleteTodo