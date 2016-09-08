import database from '../database/db'

const deleteEvent = reload => event => {
  database.deleteTodo( parseInt( event.target.dataset.id ) )
  reload()
}

const bindDeleteButton = reload => {
  Array.from( document.querySelectorAll( '.task button' ) )
    .forEach( element => element.addEventListener( 'click', deleteEvent( reload ) ))
}

export default bindDeleteButton