const Sequelize = require('sequelize');

const sequelize = new Sequelize('quiz', 'root', 'Krmsadmaas5.', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
