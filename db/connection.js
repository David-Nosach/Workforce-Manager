const mysql = require("mysql2");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost", // Database server address, usually localhost for local development
  user: "root", // MySQL user with appropriate permissions
  password: "password", // Password for the MySQL user
  database: "company_db", // Name of the database to connect to
});

// Connect to the database and handle any connection errors
connection.connect((err) => {
  if (err) throw err; // If there is an error during connection, throw an error
  console.log("Connected to the company_db database.");
});

// Export the connection wrapped in a promise interface for use in async/await syntax
module.exports = connection.promise();
