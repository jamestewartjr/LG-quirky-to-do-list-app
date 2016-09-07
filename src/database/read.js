import allTodos from './list'

const readTodo = id => allTodos.find( todo => todo.id === id )

export default readTodo