import { getData, saveData } from './db'

const updateTodo = (id, attributes) => {
  const { nextId, todos } = getData()
  const index = todos.findIndex( item => item.id === id )
  const currentTodo = todos[ index ]

  const data = { 
    nextId, 
    todos: [ 
      ...todos.slice( 0, index ),
       Object.assign( {}, currentTodo, attributes ),
      ...todos.slice( index + 1 )
    ]
  }

  saveData( data )

  return data
}

export default updateTodo