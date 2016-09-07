import createTodo from './create'
import readTodo from './read'
import updateTodo from './update'
import deleteTodo from './delete'
import listTodos from './list'

const DATABASE_NAME = 'quirky-crake'

const getData = () => {
  const result = JSON.parse( localStorage.getItem( DATABASE_NAME ) )

  return result === undefined || result === null ? { nextId: 0, todos: [] } : result
}

const saveData = data => 
  localStorage.setItem( DATABASE_NAME, JSON.stringify( data ) )

const database = { 
  createTodo, readTodo, updateTodo, deleteTodo, listTodos
}

export { database as default, getData, saveData }
