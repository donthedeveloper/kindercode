const db = require('APP/db')
const data = require('../seed.json')

const seedUsers = () => db.Promise.map(data.users, user => db.model('users').create(user))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
