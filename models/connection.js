
const mysql = require("mysql");

let connection;

// if deployed use Heroku db otherwise use localhost
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.secret_password,
    database: "burger_db"
  });
}

// make avaible else where
module.exports = connection;
