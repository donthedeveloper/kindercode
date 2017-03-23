const db = require('APP/db')
const data = require('../seed.json')

const seedUsers = () => db.Promise.map(data.users, user => db.model('users').create(user))
const seedChallenges = () => db.Promise.map(data.challenges, challenge => db.model('challenges').create(challenge))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedChallenges)
  .then(challenges => console.log(`Seeded ${challenges.length} challenges OK`))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
