const request = require('request')

request('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => {
  if (error) {
    console.log('error', error)
    return
  }
  const books = JSON.parse(body)
  for (let i = 0; i < books.length; i++) {
    console.log(`${books[i].id} ${books[i].name}`)
  }
})
