const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
});

module.exports = db;
