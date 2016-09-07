import { getData } from './db'

const allTodos = () => getData().todos

export default allTodos