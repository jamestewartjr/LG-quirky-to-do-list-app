import createTodo from './create'
import readTodo from './read'
import updateTodo from './update'
import deleteTodo from './delete'
import listTodos from './list'

const database = { 
  createTodo, readTodo, updateTodo, deleteTodo, listTodos
}

export default database