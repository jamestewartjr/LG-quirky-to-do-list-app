import { getData } from './database/db'
import bindAddButton from './app/addButton'
import bindTodoEdit from './app/editButton'
import bindTodoDelete from './app/deleteButton'

import listingTemplate from './views/landing.pug'

const loadListingPage = () => {
  const { todos } = getData()

  document.getElementById( 'content' ).innerHTML =
    listingTemplate({ todos })

  bindAddButton( loadListingPage )
  bindTodoEdit( loadListingPage )
  bindTodoDelete( loadListingPage )
}

loadListingPage()
