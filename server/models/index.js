'use strict'
// JS 엄격모드( strict mode ) 활성화
// - 잠재적인 오류를 방지하고 더 안전한 코드를 작성하도록 도와줌.

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = require('./Todo')(sequelize, Sequelize);

module.exports = db;
