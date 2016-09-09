import database, { getData, saveData } from '../database/db'

const todoSort = (one, two) => {
  if( one.order > two.order ) {
    return -1
  } else if( one.order < two.order ) {
    return 1
  } else {
    return 0
  }
}

const swapOrder = (one, two) => {
  const temp = one.order
  one.order = two.order
  two.order = temp
}

const fetchData = element => {
  const id = parseInt( element.dataset.id )
  const data = getData()
  const { todos } = data
  const index = todos.findIndex( todo => todo.id === id )

  return { id, data, todos, index }
}

const sortAndStore = (data, todos) => {
  saveData( Object.assign( 
    {}, data, { todos: todos.sort( todoSort ) }
  ))
}

const moveUp = reload => event => {
  const { id, data, todos, index } = fetchData( event.target )

  if( index > 0 ) {
    swapOrder( todos[ index ], todos[ index - 1 ] )

    sortAndStore( data, todos )
  }

  reload()
}

const moveDown = reload => event => {
  const { id, data, todos, index } = fetchData( event.target )

  if( index < todos.length - 1 ) {
    swapOrder( todos[ index ], todos[ index + 1 ] )
    
    sortAndStore( data, todos )
  }

  reload()
}

const buttons = selector => 
  Array.from( document.querySelectorAll( selector ) )

const bindUpButtons = reload => {
  buttons( 'button.up' )
    .forEach( button => button.addEventListener( 'click', moveUp( reload )))
}

const bindDownButtons = reload => {
  buttons( 'button.down' )
    .forEach( button => button.addEventListener( 'click', moveDown( reload )))  
}

export { bindUpButtons, bindDownButtons, todoSort }