import database from './database/db'
import thingTemplate from './views/thing.pug'

const html = thingTemplate({ things: [1,2,3,4,'hi world']})


const content = document.getElementById( 'content' )
const todoItemTitle = document.getElementById('title')

todoItemTitle.value  
  // complete: document.getElementById('complete')


// const create = document.onclick( database.createTodo(todoItem) )


content.innerHTML = html

console.log('title', title)
console.log('todoItem', todoItemTitle )
console.log(create)