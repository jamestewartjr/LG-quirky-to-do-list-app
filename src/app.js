import database, { getData } from './database/db'
import listingTemplate from './views/landing.pug'


const loadListingPage = () => {
  const { todos } = getData()

  document.getElementById( 'content' ).innerHTML =
    listingTemplate({ todos })

  bindEvents()
}

const bindEvents = () => {
  const addButton = document.querySelector( '.add-task button' )

  addButton.addEventListener( 'click', event => {
    const input = document.getElementById( 'new-item-title' )

    const { todos } = database.createTodo( input.value )

    input.value = ''
    loadListingPage( todos )
  })
}

loadListingPage( [] )
