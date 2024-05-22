// Importing necessary dependencies
const inquirer = require("inquirer"); // Library for handling user input
const db = require("../db/queries"); // Module containing database query functions

// Function to start the command-line interface
const start = async () => {
  // Prompting the user to choose an action
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?", // Prompt message
      choices: [
        // List of available actions
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit", // Option to exit the application
      ],
    },
  ]);

  // Handling user-selected action
  switch (action) {
    case "View all departments": // Display all departments
      const departments = await db.getDepartments();
      console.table(departments); // Display departments in a formatted table
      break;
    case "View all roles": // Display all roles
      const roles = await db.getRoles();
      console.table(roles); // Display roles in a formatted table
      break;
    case "View all employees": // Display all employees
      const employees = await db.getEmployees();
      console.table(employees); // Display employees in a formatted table
      break;
    // Additional cases for other actions like adding, updating, or deleting records
    case "Exit": // Exit the application
      process.exit(); // Terminate the process
  }

  start(); // Restart the CLI prompt
};

start(); // Start the CLI application
