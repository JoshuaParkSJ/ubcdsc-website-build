const mysql = require('mysql');

// ----------------------------------------------------------------------------------------------------------------
// Database Connection for Production (App engine)

// let config = {
//     user: process.env.SQL_USER,
//     database: process.env.SQL_DATABASE,
//     password: process.env.SQL_PASSWORD,
// }

// if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
//   config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
// }

// let connection = mysql.createConnection(config);

// ----------------------------------------------------------------------------------------------------------------
// Database Connection for Development (Local)

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: '3306',
  database: 'ubcdscWebsite'
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // user: process.env.DB_USER,
  // database: process.env.DB_DATABASE,
  // password: process.env.DB_PASS
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as thread id: ' + connection.threadId);
});

module.exports = connection;

// const DB_HOST = process.env.DB_HOST;
// const DB_USER = process.env.DB_USER;
// const DB_PASS = process.env.DB_PASS;
// const DB_NAME = process.env.DB_NAME;

// const connection = mysql.createConnection({
//   host: `/cloudsql/${process.env.DB_INSTANCE}`,
//   user: DB_USER,
//   password: DB_PASS,
//   database: DB_NAME,
//   socketPath: `/cloudsql/${process.env.DB_INSTANCE}`,
// });
