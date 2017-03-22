const db = require('APP/db');
const Sequelize = require('sequelize');

const Challenges = db.define('challenges', {
   yellow_star: Sequelize.JSON,
   blue_star: Sequelize.JSON,
   cactus: Sequelize.JSON,
   sprite: Sequelize.JSON
 });

module.exports = Challenges;
