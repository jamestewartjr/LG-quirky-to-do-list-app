import database, { getData } from './database/db'
import bindTodoEdit from './app/editButton'

import listingTemplate from './views/landing.pug'

const loadListingPage = () => {
  const { todos } = getData()

  document.getElementById( 'content' ).innerHTML =
    listingTemplate({ todos })

  bindAddButton()
  bindDeleteButton()
  bindTodoEdit( loadListingPage )
}

const bindAddButton = () => {
  const addButton = document.querySelector( '.add-task button' )

  addButton.addEventListener( 'click', event => {
    const input = document.getElementById( 'new-item-title' )

    const { todos } = database.createTodo( input.value )

    input.value = ''
    loadListingPage()
  })
}

const bindDeleteButton = () => {
  const deleteButton = document.querySelector( '.task button' )
  console.log('1', deleteButton)
  deleteButton.addEventListener( 'click', event => {
    const input = document.getElementById( 'delete-action')
    console.log('dataid', )
    console.log('input',input)

    const { todos } = database.deleteTodo( input )
    loadListingPage()
  })
}

loadListingPage()
