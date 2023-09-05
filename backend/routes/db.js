var mariadb = require('mariadb');
 
// Create a connection pool

const pool = mariadb.createPool({
    host: "10.0.131.57",
    user: "root",
    password: "Dinesh@123",
    database: "mcl3",
    port: 3308,
 });


// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool
});
