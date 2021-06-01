const request = require('request')
const process = require('process')

const command = process.argv[2]
const element = process.argv[3]
if (command === 'list') {
  listbooks(element)
} else if (command === 'read') {
  readbook(element)
} else if (command === 'delete') {
  deletebook(element)
} else if (command === 'create') {
  createbook(element)
} else if (command === 'update') {
  updatebook(element, process.argv[4])
} else {
  console.log('fail')
}

function listbooks() {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20', (error, response, body) => {
    const books = JSON.parse(body)
    if (error) {
      return console.log('列印失敗', error)
    }
    for (let i = 0; i < books.length; i++) {
      console.log(`${books[i].id} ${books[i].name}`)
    }
  })
}

function readbook(element) {
  request(`https://lidemy-book-store.herokuapp.com/books/${element}`, (error, response, body) => {
    const book = JSON.parse(body)
    if (error) {
      return console.log('獲取失敗', error)
    }
    console.log(`${book.id} ${book.name}`)
  })
}

function deletebook(element) {
  request.del(`https://lidemy-book-store.herokuapp.com/books/${element}`, (error, response, body) => {
    if (error) {
      return console.log('刪除失敗', error)
    }
    console.log('刪除成功')
  })
}

function createbook(name) {
  request.post({
    url: 'https://lidemy-book-store.herokuapp.com/books',
    form: {
      name
    }
  }, (error, response, body) => {
    if (error) {
      return console.log('新增失敗', error)
    }
    console.log('新增成功')
  })
}

function updatebook(element, name) {
  request.patch({
    url: `https://lidemy-book-store.herokuapp.com/books/${element}`,
    form: {
      name
    }
  }, (error, response, body) => {
    if (error) {
      return console.log('更新失敗', error)
    }
    console.log('更新成功')
  })
}
