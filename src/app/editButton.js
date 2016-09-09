import database from '../database/db'
import editTemplate from '../views/todoInput.pug'

const updateTodoHandler = (id, editId, reload) => event => {
  if( event.charCode === 13 ) {
    const title = document.getElementById( editId ).value

    database.updateTodo( parseInt( id ), { title } )
    reload()
  }
}

const completeHandler = reload => event => {
  const id = parseInt( event.target.dataset.id )
  const complete = event.target.dataset.complete === 'false'

  database.updateTodo( id, { complete })  
  reload()
}

const swapHandler = reload => event => {
  const { innerText: text } = event.target
  const { id } = event.target.dataset
  const editId = `edit-${id}`

  event.target.parentElement.innerHTML = editTemplate({ editId, text })

  document.getElementById( editId )
    .addEventListener( 'keypress', updateTodoHandler( id, editId, reload ) )
}

const setupEdit = reload => {
  Array.from( document.getElementsByClassName( 'title' ) )
    .forEach( element => element.addEventListener( 'click', swapHandler( reload ) ))

  Array.from( document.querySelectorAll('span.checkbox' ) )
    .forEach( element => element.addEventListener( 'click', completeHandler( reload ) ))

 }

export default setupEdit