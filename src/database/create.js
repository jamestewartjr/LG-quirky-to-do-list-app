import { getData, saveData } from './db'

const createTodo = ( todoItem) => {
   // data = getData()
   todoItem = {
    title: '',
    // complete: false
  }
  
  saveData(data.todoItem)

}

export default createTodo