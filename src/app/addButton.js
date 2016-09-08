import database from '../database/db'

const bindAddButton = reload => {
  const addButton = document.querySelector( '.add-task button' )

  addButton.addEventListener( 'click', event => {
    const input = document.getElementById( 'new-item-title' )

    const { todos } = database.createTodo( input.value )

    input.value = ''
    reload()
  })
}

export default bindAddButton