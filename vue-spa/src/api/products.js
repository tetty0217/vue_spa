const database = [
  { id: 1, name: 'productA', price: 100, content: 'productA' },
  { id: 2, name: 'productB', price: 200, content: 'productB' },
  { id: 3, name: 'productC', price: 300, content: 'productC' }
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
    }, 1000)
  }
}
