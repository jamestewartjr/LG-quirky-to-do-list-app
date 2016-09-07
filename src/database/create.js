import { getData, saveData } from './db'

const createTodo = title => {
  const { nextId, todos } = getData()

  const item = {
    title,
    complete: false,
    id: nextId
  }
  
  const data = { 
    nextId: nextId + 1,
    todos: [ item, ...todos ]
  }

  saveData( data )

  return data
}

export default createTodo