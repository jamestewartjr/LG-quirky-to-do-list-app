import { getData } from './database/db'
import bindAddButton from './app/addButton'
import bindTodoEdit from './app/editButton'
import bindTodoDelete from './app/deleteButton'
import { bindUpButtons, bindDownButtons, todoSort } from './app/orderButtons'

import listingTemplate from './views/landing.pug'

const loadListingPage = () => {
  const todos = getData().todos.sort( todoSort )
  const completed = todos.filter( todo => todo.complete )
  const percentComplete = Math.round( 100 * completed.length / todos.length * 1.0 )

  document.getElementById( 'content' ).innerHTML =
    listingTemplate({ todos, percentComplete })

  bindAddButton( loadListingPage )
  bindTodoEdit( loadListingPage )
  bindTodoDelete( loadListingPage )
  bindUpButtons( loadListingPage )
  bindDownButtons( loadListingPage )
  completeStatus( loadListingPage )
}

loadListingPage()
