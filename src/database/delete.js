import { getData, saveData } from './db'
import allTodos from './list'

const deleteTodo = id => {
  const data = getData()
  const index = data.todos.findIndex( todo => todo.id === id )
  // removeItem(index)
  console.log('dataDel', data)
  saveData( Object.assign( {}, data, 
    { todos: 
      [
        ...data.slice( 0, index ),
        ...data.slice( index + 1 )
      ]
    })
  )

}

export default deleteTodo