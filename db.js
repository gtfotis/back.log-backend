require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.elephantSQLName,
  password: process.env.elephantSQLPassword,
  host: process.env.elephantSQLHost,
  database: process.env.elephantSQLName,
});

module.exports = pool;
