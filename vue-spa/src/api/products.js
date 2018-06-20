const database = [
  { id: 1, name: 'Green Apple', price: 100, content: 'Green Apple is great! So you should buy this!!!' },
  { id: 2, name: 'Cookies', price: 200, content: 'Cookies is great! So you should buy this!!!' },
  { id: 3, name: 'Cakes', price: 300, content: 'Cakes is great! So you should buy this!!!' }
]
export default {
  fetch(id) {
    return database
  },
  find(id) {
    return database.find(el => el.id === id)
  },
  asyncFind(id, callback) {
    setTimeout(() => {
      callback(database.find(el => el.id === id))
    }, 600)
  }
}
