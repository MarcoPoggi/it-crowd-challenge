const { Sequelize } = require("sequelize");
const { DB_NAME, DB_USER, DB_HOST, DB_PASS } = process.env;

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

module.exports = { database };
