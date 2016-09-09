import { getData } from './database/db'
import bindAddButton from './app/addButton'
import bindTodoEdit from './app/editButton'
import bindTodoDelete from './app/deleteButton'
import { bindUpButtons, bindDownButtons } from './app/orderButtons'

import listingTemplate from './views/landing.pug'

const loadListingPage = () => {
  const { todos } = getData()

  document.getElementById( 'content' ).innerHTML =
    listingTemplate({ todos })

  bindAddButton( loadListingPage )
  bindTodoEdit( loadListingPage )
  bindTodoDelete( loadListingPage )
  bindUpButtons( loadListingPage )
  bindDownButtons( loadListingPage )
  completeStatus( loadListingPage )
}

const completeStatus = () => {
  // check for number of all items
  // check which items are true
  // count items that are true
  // divide true/ total * 100
  // render in pug
}

loadListingPage()
