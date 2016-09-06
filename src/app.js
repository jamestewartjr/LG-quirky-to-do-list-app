import database from './database/db'
import thingTemplate from './views/thing.pug'

const html = thingTemplate({ things: [1,2,3,4,'hi world']})
console.log( html )

const content = document.getElementById( 'content' )
console.log( content )
content.innerHTML = html