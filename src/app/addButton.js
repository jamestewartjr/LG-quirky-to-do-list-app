import database from '../database/db'

const submitTodo = (reload, input) => {
  const { todos } = database.createTodo( input.value )

  input.value = ''
  reload() 
}

const bindAddButton = reload => {
  const addButton = document.querySelector( '.add-task button' )
  const input = document.getElementById( 'new-item-title' ) 

  addButton.addEventListener( 'click', event => {
    submitTodo( reload, input )
  })

  input.addEventListener( 'keypress', event => {
    if( event.charCode === 13 ) {
      submitTodo( reload, input )
    }
  })

  input.focus()
}

export default bindAddButton